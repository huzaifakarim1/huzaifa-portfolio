import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import LazyView from "../../LazyView";

// The model + Canvas live in their own component so that useGLTF (which kicks
// off the model download) only runs once LazyView has mounted it — i.e. when
// the skills section scrolls into view, instead of on initial page load.
const TechModel = ({ model, active }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas frameloop={active ? "always" : "never"} dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

const TechIcon = ({ model }) => {
  return (
    <LazyView className="w-full h-full">
      {(visible) => (
        <Suspense fallback={null}>
          <TechModel model={model} active={visible} />
        </Suspense>
      )}
    </LazyView>
  );
};

export default TechIcon;
