import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as CanvasWrapper from "@/components/designSystems/CanvasWrapper";

function Sphere(props: JSX.IntrinsicElements["mesh"]) {
  const sphereRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      {...props}
      ref={sphereRef}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshPhysicalMaterial
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={0}
        metalness={0.5}
      />
    </mesh>
  );
}

export const Components = () => {
  return (
    <CanvasWrapper.Components>
      <Canvas
        frameloop="demand"
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight />
        <spotLight
          intensity={0.5}
          angle={0.2}
          penumbra={1}
          position={[5, 15, 10]}
        />
        <Sphere />
        <OrbitControls
          enableDamping
          enableZoom={false}
          ref={null as any}
          target={[0, 0, 0]}
        />
      </Canvas>
    </CanvasWrapper.Components>
  );
};
