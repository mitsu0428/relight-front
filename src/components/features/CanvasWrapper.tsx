import React, { useState, useEffect, useRef } from "react";
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
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhysicalMaterial
        roughness={0.5}
        metalness={1}
      />
    </mesh>
  );
}

export const Components = () => {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (camera) {
      // Optionally, you can set up initial camera properties here
    }
  }, [camera]);

  return (
    <CanvasWrapper.Components>
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 5], fov: 45 }}
        onCreated={({ camera }) => {
          setCamera(camera as THREE.PerspectiveCamera);
        }}
      >
        <ambientLight />
        <spotLight
          intensity={0.2}
          angle={0.2}
          penumbra={1}
          position={[5, 15, 10]}
        />
        <Sphere />
        {camera && (
          <OrbitControls
            enableDamping
            enableZoom={false}
            target={[0, 0, 0]}
            camera={camera}
          />
        )}
      </Canvas>
    </CanvasWrapper.Components>
  );
};
