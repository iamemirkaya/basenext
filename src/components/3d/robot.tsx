"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import { m, useInView } from "motion/react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ROBOT_COLORS, RobotModel } from "@/components/3d/robot-model";
import { fadeUp } from "@/lib/motion";

type ReadyHandler = (ready: boolean) => void;

function Lights() {
  return (
    <>
      <hemisphereLight args={["#ffffff", ROBOT_COLORS.joint, 0.8]} />
      <directionalLight position={[5, 6, 5]} intensity={2} />
      <directionalLight position={[-4, 2, -3]} color={ROBOT_COLORS.glow} intensity={4} />
      <directionalLight position={[4, 1, -3]} color={ROBOT_COLORS.glow} intensity={3} />
    </>
  );
}

function GroundShadow() {
  const texture = useMemo(() => {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    if (context) {
      const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.6)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, size, size);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useEffect(() => () => texture.dispose(), [texture]);

  return (
    <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[3.5, 3.5]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} />
    </mesh>
  );
}

function ShaderPrecompile({ onReady }: { onReady: ReadyHandler }) {
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    let active = true;
    gl.compileAsync(scene, camera).then(() => active && onReady(true));
    return () => {
      active = false;
    };
  }, [gl, scene, camera, onReady]);

  return null;
}

const Scene = memo(function Scene({ onReady }: { onReady: ReadyHandler }) {
  return (
    <>
      <Lights />
      <RobotModel />
      <GroundShadow />
      <ShaderPrecompile onReady={onReady} />
    </>
  );
});

export function RobotScene() {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container);
  const [ready, setReady] = useState(false);

  return (
    <m.div
      ref={container}
      variants={fadeUp}
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      className="size-full"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        frameloop={ready && inView ? "always" : "never"}
        style={{ pointerEvents: "none" }}
      >
        <Scene onReady={setReady} />
      </Canvas>
    </m.div>
  );
}
