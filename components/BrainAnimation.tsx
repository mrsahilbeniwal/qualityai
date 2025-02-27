import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Tubes } from 'src/brain-tubes';
import { BrainParticles } from 'src/brain-particles';
import { data } from 'src/data';

function createBrainCurvesFromPaths(): THREE.CatmullRomCurve3[] {
  const paths = data.crypto[0].paths; // Change 'crypto' to the appropriate dataset if needed

  const brainCurves: THREE.CatmullRomCurve3[] = [];
  paths.forEach(path => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < path.length; i += 3) {
      points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
    }
    const tempCurve = new THREE.CatmullRomCurve3(points);
    brainCurves.push(tempCurve);
  });

  return brainCurves;
}

const curves = createBrainCurvesFromPaths();

const BrainAnimation: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <Canvas camera={{ position: [0, 0, 0.3], near: 0.001, far: 5 }}>
        <color attach="background" args={["black"]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Tubes curves={curves} />
        <BrainParticles curves={curves} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default BrainAnimation;
