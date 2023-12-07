import React, { useRef, useState } from "react";
import * as CanvasWrapper from "@/components/designSystems/CanvasWrapper";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { LUTPass } from "three-stdlib";

extend({ LUTPass });

function Sphere(props: JSX.IntrinsicElements["mesh"]) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
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
        <OrbitControls />
      </Canvas>
    </CanvasWrapper.Components>
  );
};
