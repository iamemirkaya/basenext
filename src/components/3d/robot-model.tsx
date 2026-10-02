"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export const ROBOT_COLORS = {
  body: "#18181b",
  panel: "#27272a",
  joint: "#09090b",
  glow: "#10b981",
} as const;

const GLOW_COLOR = new THREE.Color(ROBOT_COLORS.glow);

const SURFACES = {
  body: { color: ROBOT_COLORS.body, roughness: 0.4, metalness: 0.45 },
  panel: { color: ROBOT_COLORS.panel, roughness: 0.4, metalness: 0.45 },
  joint: { color: ROBOT_COLORS.joint, roughness: 0.5, metalness: 0.5 },
  glass: { color: ROBOT_COLORS.joint, roughness: 0.3, metalness: 0.3 },
} as const;

const BLINK_INTERVAL = 4;
const BLINK_DURATION = 0.18;
const STATUS_BARS = [-0.28, -0.14, 0, 0.14, 0.28];
const STATUS_BAR_HEIGHT = 0.18;
const HOVER_RING_OFFSETS = [0, 0.5];
const HOVER_RING_PERIOD = 1.6;
const SIDES = [-1, 1] as const;

type Side = (typeof SIDES)[number];
type Pointer = RefObject<{ x: number; y: number }>;

function usePointer(): Pointer {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      const handleScroll = () => {
        pointer.current.y = -Math.min(window.scrollY / window.innerHeight, 1);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const handleMouseMove = (event: MouseEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return pointer;
}

type GlowMaterialProps = {
  intensity: number;
  pulse?: number;
  speed?: number;
  phase?: number;
};

function Surface({ type }: { type: keyof typeof SURFACES }) {
  return <meshStandardMaterial {...SURFACES[type]} />;
}

function GlowMaterial({ intensity, pulse = 0, speed = 2, phase = 0 }: GlowMaterialProps) {
  const material = useRef<THREE.MeshBasicMaterial>(null);
  const color = useMemo(() => GLOW_COLOR.clone().multiplyScalar(intensity), [intensity]);

  useFrame(({ clock }) => {
    if (!pulse || !material.current) return;
    material.current.color
      .copy(GLOW_COLOR)
      .multiplyScalar(intensity + Math.sin(clock.elapsedTime * speed + phase) * pulse);
  });

  return <meshBasicMaterial ref={material} color={color} toneMapped={false} />;
}

function StatusBars() {
  const bars = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    bars.current.forEach((bar, index) => {
      if (!bar) return;
      const level = 0.35 + Math.abs(Math.sin(t * 2.4 + index * 0.9)) * 0.65;
      bar.scale.y = level;
      bar.position.y = (STATUS_BAR_HEIGHT * (level - 1)) / 2;
    });
  });

  return (
    <group position={[0, -0.3, 0.54]}>
      {STATUS_BARS.map((x, index) => (
        <mesh
          key={x}
          ref={(bar) => {
            bars.current[index] = bar;
          }}
          position={[x, 0, 0]}
        >
          <boxGeometry args={[0.08, STATUS_BAR_HEIGHT, 0.02]} />
          <GlowMaterial intensity={1.2} />
        </mesh>
      ))}
    </group>
  );
}

function Torso() {
  return (
    <>
      <RoundedBox args={[1.4, 1.5, 1]} radius={0.18} smoothness={4}>
        <Surface type="body" />
      </RoundedBox>
      <mesh position={[0, 0.2, 0.52]}>
        <torusGeometry args={[0.26, 0.04, 16, 48]} />
        <Surface type="panel" />
      </mesh>
      <mesh position={[0, 0.2, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.06, 48]} />
        <GlowMaterial intensity={1.5} pulse={0.5} />
      </mesh>
      <RoundedBox args={[0.8, 0.3, 0.06]} radius={0.025} smoothness={2} position={[0, -0.3, 0.5]}>
        <Surface type="glass" />
      </RoundedBox>
      <StatusBars />
    </>
  );
}

function Thruster() {
  const rings = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    rings.current.forEach((ring, index) => {
      if (!ring) return;
      const progress = (clock.elapsedTime / HOVER_RING_PERIOD + HOVER_RING_OFFSETS[index]) % 1;
      ring.scale.setScalar(0.6 + progress * 1.4);
      (ring.material as THREE.MeshBasicMaterial).opacity = (1 - progress) * 0.7;
    });
  });

  return (
    <group position={[0, -0.75, 0]}>
      <mesh position={[0, -0.07, 0]}>
        <cylinderGeometry args={[0.3, 0.22, 0.14, 32]} />
        <Surface type="joint" />
      </mesh>
      <mesh position={[0, -0.145, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.02, 32]} />
        <GlowMaterial intensity={1.6} pulse={0.4} speed={8} />
      </mesh>
      {HOVER_RING_OFFSETS.map((offset, index) => (
        <mesh
          key={offset}
          ref={(ring) => {
            rings.current[index] = ring;
          }}
          position={[0, -0.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[0.2, 0.24, 48]} />
          <meshBasicMaterial
            color={ROBOT_COLORS.glow}
            transparent
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function Arm({ side }: { side: Side }) {
  const arm = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!arm.current) return;
    const swing = Math.sin(clock.elapsedTime * 1.6 + (side === 1 ? 0 : Math.PI));
    arm.current.rotation.x = swing * 0.12;
    arm.current.rotation.z = side * (0.06 + swing * 0.02);
  });

  return (
    <>
      <RoundedBox args={[0.4, 0.6, 0.8]} radius={0.1} smoothness={4} position={[side * 0.8, 0.5, 0]}>
        <Surface type="joint" />
      </RoundedBox>
      <group ref={arm} position={[side * 1.1, 0.15, 0.3]}>
        <RoundedBox args={[0.3, 0.7, 0.4]} radius={0.08} smoothness={4} position={[0, -0.35, 0]}>
          <Surface type="panel" />
        </RoundedBox>
        <mesh position={[0, -0.66, 0]}>
          <boxGeometry args={[0.32, 0.05, 0.42]} />
          <GlowMaterial intensity={1.2} />
        </mesh>
        <mesh position={[0, -0.82, 0]}>
          <sphereGeometry args={[0.13, 24, 24]} />
          <Surface type="joint" />
        </mesh>
      </group>
    </>
  );
}

function Neck() {
  return (
    <group position={[0, 0.85, 0]}>
      <mesh>
        <cylinderGeometry args={[0.2, 0.2, 0.3, 24]} />
        <Surface type="joint" />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.21, 0.21, 0.04, 24]} />
        <GlowMaterial intensity={1} />
      </mesh>
    </group>
  );
}

function Head({ pointer }: { pointer: Pointer }) {
  const eyes = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!eyes.current) return;
    const phase = clock.elapsedTime % BLINK_INTERVAL;
    eyes.current.scale.y =
      phase < BLINK_DURATION
        ? Math.max(0.1, Math.abs(Math.cos((phase / BLINK_DURATION) * Math.PI)))
        : 1;
    eyes.current.position.x = THREE.MathUtils.lerp(eyes.current.position.x, pointer.current.x * 0.06, 0.1);
    eyes.current.position.y = THREE.MathUtils.lerp(eyes.current.position.y, 0.08 + pointer.current.y * 0.04, 0.1);
  });

  return (
    <>
      <RoundedBox args={[1.2, 0.9, 1.1]} radius={0.12} smoothness={4}>
        <Surface type="panel" />
      </RoundedBox>
      <RoundedBox args={[1, 0.68, 0.06]} radius={0.025} smoothness={2} position={[0, 0, 0.53]}>
        <Surface type="glass" />
      </RoundedBox>
      <group ref={eyes} position={[0, 0.08, 0.57]}>
        {SIDES.map((side) => (
          <RoundedBox key={side} args={[0.32, 0.12, 0.04]} radius={0.02} smoothness={2} position={[side * 0.24, 0, 0]}>
            <GlowMaterial intensity={2} />
          </RoundedBox>
        ))}
      </group>
      <mesh position={[0, -0.16, 0.565]}>
        <boxGeometry args={[0.22, 0.03, 0.02]} />
        <GlowMaterial intensity={1} />
      </mesh>
      {SIDES.map((side) => (
        <group key={side}>
          <mesh position={[side * 0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 24]} />
            <Surface type="joint" />
          </mesh>
          <mesh position={[side * 0.71, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.02, 24]} />
            <GlowMaterial intensity={1.5} pulse={0.4} speed={1.5} phase={side} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 0.55, -0.2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
        <Surface type="panel" />
      </mesh>
      <mesh position={[0, 0.75, -0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <GlowMaterial intensity={1.6} pulse={0.4} speed={3} phase={1} />
      </mesh>
    </>
  );
}

export function RobotModel() {
  const pointer = usePointer();
  const head = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!head.current || !body.current) return;

    const targetX = (pointer.current.x * Math.PI) / 3;
    const targetY = (pointer.current.y * Math.PI) / 4;

    head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, targetX, 0.05);
    head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -targetY, 0.05);

    body.current.rotation.y = THREE.MathUtils.lerp(body.current.rotation.y, targetX * 0.4, 0.02);
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
      <group ref={body} position={[0, -0.6, 0]}>
        <Torso />
        <Thruster />
        {SIDES.map((side) => (
          <Arm key={side} side={side} />
        ))}
        <Neck />
        <group ref={head} position={[0, 1.4, 0]}>
          <Head pointer={pointer} />
        </group>
      </group>
    </Float>
  );
}
