"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function EyewearFrameModel({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0.1, y: -0.3 });

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth mouse parallax
    targetRotation.current.x = 0.1 + mousePosition.y * 0.35;
    targetRotation.current.y = -0.3 + mousePosition.x * 0.55;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      4,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotation.current.y,
      4,
      delta
    );
  });

  // Material properties
  const titaniumGold = new THREE.MeshStandardMaterial({
    color: "#D4AF37",
    metalness: 0.9,
    roughness: 0.25,
  });

  const rawSilver = new THREE.MeshStandardMaterial({
    color: "#E2E8F0",
    metalness: 0.95,
    roughness: 0.18,
  });

  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: "#E8F4F8",
    transparent: true,
    opacity: 0.35,
    transmission: 0.85,
    roughness: 0.05,
    ior: 1.52,
    reflectivity: 0.6,
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.15}>
      {/* Left Lens Rim (Torus) */}
      <mesh position={[-1.3, 0, 0]} material={titaniumGold}>
        <torusGeometry args={[0.9, 0.045, 24, 48]} />
      </mesh>
      {/* Left Lens Glass */}
      <mesh position={[-1.3, 0, 0]} material={lensMaterial}>
        <cylinderGeometry args={[0.88, 0.88, 0.02, 36]} />
      </mesh>

      {/* Right Lens Rim (Torus) */}
      <mesh position={[1.3, 0, 0]} material={titaniumGold}>
        <torusGeometry args={[0.9, 0.045, 24, 48]} />
      </mesh>
      {/* Right Lens Glass */}
      <mesh position={[1.3, 0, 0]} material={lensMaterial}>
        <cylinderGeometry args={[0.88, 0.88, 0.02, 36]} />
      </mesh>

      {/* Titanium Center Bridge (Curved Tube) */}
      <mesh position={[0, 0.2, 0.02]} rotation={[0, 0, Math.PI / 2]} material={rawSilver}>
        <cylinderGeometry args={[0.035, 0.035, 0.8, 16]} />
      </mesh>
      <mesh position={[0, 0.35, 0.04]} rotation={[0, 0, 0]} material={titaniumGold}>
        <torusGeometry args={[0.42, 0.025, 16, 24, Math.PI * 0.6]} />
      </mesh>

      {/* Left Temple (Arm) */}
      <group position={[-2.2, 0.2, 0]}>
        <mesh position={[0, 0, -1.2]} rotation={[0.05, 0.12, 0]} material={titaniumGold}>
          <boxGeometry args={[0.04, 0.05, 2.4]} />
        </mesh>
        {/* Acetate Temple Tip */}
        <mesh position={[0.02, -0.15, -2.5]} rotation={[0.4, 0.12, 0]} material={rawSilver}>
          <boxGeometry args={[0.05, 0.08, 0.8]} />
        </mesh>
      </group>

      {/* Right Temple (Arm) */}
      <group position={[2.2, 0.2, 0]}>
        <mesh position={[0, 0, -1.2]} rotation={[0.05, -0.12, 0]} material={titaniumGold}>
          <boxGeometry args={[0.04, 0.05, 2.4]} />
        </mesh>
        {/* Acetate Temple Tip */}
        <mesh position={[-0.02, -0.15, -2.5]} rotation={[0.4, -0.12, 0]} material={rawSilver}>
          <boxGeometry args={[0.05, 0.08, 0.8]} />
        </mesh>
      </group>

      {/* Nosepads */}
      <mesh position={[-0.32, -0.1, 0.15]} rotation={[0.2, -0.3, 0]} material={lensMaterial}>
        <capsuleGeometry args={[0.04, 0.12, 8, 12]} />
      </mesh>
      <mesh position={[0.32, -0.1, 0.15]} rotation={[0.2, 0.3, 0]} material={lensMaterial}>
        <capsuleGeometry args={[0.04, 0.12, 8, 12]} />
      </mesh>
    </group>
  );
}

export function HeroEyewearCanvas() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check WebGL availability
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

  if (!isSupported) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Fallback Static Visual */}
        <img
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=1000"
          alt="Optik Ezia Japanese Beta-Titanium Frame"
          className="w-4/5 max-w-md object-contain drop-shadow-2xl animate-float-slow"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} />
        <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#E2DAD0" />
        <pointLight position={[0, 3, 2]} intensity={1.0} color="#FAF8F5" />

        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <EyewearFrameModel mousePosition={mousePos} />
        </Float>

        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.4}
          scale={7}
          blur={2.5}
          far={3}
          color="#171715"
        />

        <Environment preset="city" />
      </Canvas>
      <div className="absolute bottom-2 right-4 text-[10px] uppercase tracking-[0.2em] text-charcoal-light/60 pointer-events-none select-none">
        Interact 3D Frame • Beta-Titanium 01
      </div>
    </div>
  );
}
