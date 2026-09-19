import { Float, Lightformer, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function SacredForm() {
  const group = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const values = new Float32Array(72 * 3);
    for (let index = 0; index < 72; index += 1) {
      const angle = index * 2.399963;
      const radius = 2.2 + (index % 9) * 0.38;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = Math.sin(angle * 1.7) * 2.8;
      values[index * 3 + 2] = Math.sin(angle) * radius - 2;
    }
    return values;
  }, []);

  useFrame((state, rawDelta) => {
    if (!group.current) return;
    const delta = Math.min(rawDelta, 0.05);
    group.current.rotation.y += delta * 0.075;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.06;
  });

  return (
    <group ref={group} rotation={[0.2, 0, 0.18]}>
      <Float speed={0.7} rotationIntensity={0.18} floatIntensity={0.35}>
        {[1.55, 2.2, 2.85].map((radius, index) => (
          <mesh key={radius} rotation={[Math.PI / 2 + index * 0.38, index * 0.7, 0]}>
            <torusGeometry args={[radius, 0.018 + index * 0.006, 8, 96]} />
            <meshStandardMaterial
              color={index === 1 ? "#dfb369" : "#f4d99d"}
              emissive="#d79b43"
              emissiveIntensity={0.65}
              metalness={0.55}
              roughness={0.28}
              transparent
              opacity={0.72}
            />
          </mesh>
        ))}
        <mesh>
          <icosahedronGeometry args={[0.72, 3]} />
          <meshPhysicalMaterial
            color="#f6dfaa"
            emissive="#dba856"
            emissiveIntensity={0.5}
            transmission={0.45}
            thickness={1.4}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#f4d99d" size={0.035} transparent opacity={0.58} />
      </points>
    </group>
  );
}

export default function SpiritualScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 3, 5]} intensity={10} color="#eebd66" />
      <SacredForm />
      <Environment>
        <Lightformer intensity={2} position={[0, 5, 2]} scale={[8, 8, 1]} />
        <Lightformer intensity={1} color="#eebd66" position={[-5, 1, 0]} rotation-y={Math.PI / 2} scale={[12, 2, 1]} />
      </Environment>
    </Canvas>
  );
}