"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Environment } from "@react-three/drei";
import * as THREE from "three";

function Floating3DText({ mousePos }: { mousePos: { x: number; y: number } }) {
  const textGroupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!textGroupRef.current) return;

    // Subtle responsive mouse parallax
    targetRotation.current.x = mousePos.y * 0.25;
    targetRotation.current.y = mousePos.x * 0.35;

    textGroupRef.current.rotation.x = THREE.MathUtils.damp(
      textGroupRef.current.rotation.x,
      targetRotation.current.x,
      3,
      delta
    );
    textGroupRef.current.rotation.y = THREE.MathUtils.damp(
      textGroupRef.current.rotation.y,
      targetRotation.current.y,
      3,
      delta
    );

    // Subtle gentle wave motion
    textGroupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
  });

  return (
    <group ref={textGroupRef} position={[0, 0, 0]}>
      {/* Primary 3D Floating Typography */}
      <Text
        position={[0, 0.4, 0]}
        fontSize={1.4}
        letterSpacing={0.18}
        lineHeight={1}
        font="https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff"
        color="#171715"
        fillOpacity={0.12}
        strokeWidth={0.015}
        strokeColor="#171715"
        strokeOpacity={0.25}
        anchorX="center"
        anchorY="middle"
      >
        EZIA OPTICAL
      </Text>

      {/* Supporting Subtitle in 3D Depth */}
      <Text
        position={[0, -0.6, -0.5]}
        fontSize={0.38}
        letterSpacing={0.35}
        color="#8E5238"
        fillOpacity={0.22}
        anchorX="center"
        anchorY="middle"
      >
        EST. INDONESIA • PRECISION EYEWEAR
      </Text>
    </group>
  );
}

export function Hero3DTextBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setIsSupported(false);
    } catch {
      setIsSupported(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isSupported) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-60 sm:opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
          <Floating3DText mousePos={mousePos} />
        </Float>
      </Canvas>
    </div>
  );
}
