import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";

const TechBackground = () => {
  const groupRef = useRef();

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        <group ref={groupRef}>
          {[...Array(50)].map((_, i) => (
            <Sphere
              key={i}
              position={[
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
              ]}
              scale={0.05}
            >
              <meshStandardMaterial
                color={i % 2 === 0 ? "#6366f1" : "#ec4899"}
                emissive={i % 2 === 0 ? "#6366f1" : "#ec4899"}
                emissiveIntensity={0.5}
              />
            </Sphere>
          ))}
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default TechBackground;
