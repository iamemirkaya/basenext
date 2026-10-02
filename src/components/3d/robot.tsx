"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { m } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { fadeUp } from "@/lib/motion";

const ROBOT_COLORS = {
  body: "#18181b",
  panel: "#27272a",
  joint: "#09090b",
  glow: "#10b981",
} as const;

function GlowMaterial({ intensity }: { intensity: number }) {
  return (
    <meshStandardMaterial
      color={ROBOT_COLORS.glow}
      emissive={ROBOT_COLORS.glow}
      emissiveIntensity={intensity}
      toneMapped={false}
    />
  );
}

function RobotModel() {
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);

  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!headRef.current || !bodyRef.current) return;

    const targetX = (mousePosition.current.x * Math.PI) / 3;
    const targetY = (mousePosition.current.y * Math.PI) / 4;

    headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.05);
    headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.05);

    bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, targetX * 0.4, 0.02);
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
      <group ref={bodyRef} position={[0, -0.6, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.4, 1.5, 1]} />
          <meshStandardMaterial color={ROBOT_COLORS.body} roughness={0.6} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.2, 0.51]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
          <GlowMaterial intensity={1.5} />
        </mesh>
        <mesh position={[0, -0.3, 0.51]}>
          <boxGeometry args={[0.8, 0.3, 0.05]} />
          <meshStandardMaterial color={ROBOT_COLORS.panel} roughness={0.7} />
        </mesh>
        <mesh position={[-0.8, 0.5, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.8]} />
          <meshStandardMaterial color={ROBOT_COLORS.joint} roughness={0.5} metalness={0.9} />
        </mesh>
        <mesh position={[0.8, 0.5, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.8]} />
          <meshStandardMaterial color={ROBOT_COLORS.joint} roughness={0.5} metalness={0.9} />
        </mesh>
        <mesh position={[-1.1, -0.2, 0.3]}>
          <boxGeometry args={[0.3, 0.7, 0.4]} />
          <meshStandardMaterial color={ROBOT_COLORS.panel} roughness={0.5} metalness={0.8} />
        </mesh>
        <mesh position={[1.1, -0.2, 0.3]}>
          <boxGeometry args={[0.3, 0.7, 0.4]} />
          <meshStandardMaterial color={ROBOT_COLORS.panel} roughness={0.5} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.85, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.3, 16]} />
          <meshStandardMaterial color={ROBOT_COLORS.joint} roughness={0.8} />
        </mesh>
        <group ref={headRef} position={[0, 1.4, 0]}>
          <mesh>
            <boxGeometry args={[1.2, 0.9, 1.1]} />
            <meshStandardMaterial color={ROBOT_COLORS.panel} roughness={0.5} metalness={0.8} />
          </mesh>
          <mesh position={[0, 0, 0.56]}>
            <boxGeometry args={[1.0, 0.7, 0.05]} />
            <meshStandardMaterial color={ROBOT_COLORS.joint} roughness={0.9} metalness={0.1} />
          </mesh>

          <mesh position={[-0.25, 0.1, 0.6]}>
            <boxGeometry args={[0.35, 0.12, 0.05]} />
            <GlowMaterial intensity={2} />
          </mesh>
          <mesh position={[0.25, 0.1, 0.6]}>
            <boxGeometry args={[0.35, 0.12, 0.05]} />
            <GlowMaterial intensity={2} />
          </mesh>
          <mesh position={[-0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
            <meshStandardMaterial color={ROBOT_COLORS.joint} roughness={0.6} metalness={0.9} />
          </mesh>
          <mesh position={[0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
            <meshStandardMaterial color={ROBOT_COLORS.joint} roughness={0.6} metalness={0.9} />
          </mesh>

          <mesh position={[-0.71, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
            <GlowMaterial intensity={1.5} />
          </mesh>
          <mesh position={[0.71, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
            <GlowMaterial intensity={1.5} />
          </mesh>
          <mesh position={[0, 0.55, -0.2]}>
            <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
            <meshStandardMaterial color={ROBOT_COLORS.panel} />
          </mesh>
          <mesh position={[0, 0.75, -0.2]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <GlowMaterial intensity={2} />
          </mesh>
        </group>
        
      </group>
    </Float>
  );
}

function SceneReady({ onReady }: { onReady: (ready: boolean) => void }) {
  useEffect(() => onReady(true), [onReady]);
  return null;
}

export function RobotScene({ show }: { show: boolean }) {
  const [ready, setReady] = useState(false);

  return (
    <m.div
      variants={fadeUp}
      initial="hidden"
      animate={show && ready ? "show" : "hidden"}
      className="size-full"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ pointerEvents: "none" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <RobotModel />
          <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={12} blur={2.5} far={4} />
          <SceneReady onReady={setReady} />
        </Suspense>
      </Canvas>
    </m.div>
  );
}