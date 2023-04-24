import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Scene } from './Scene';

export const FiberContainer = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [14.4666, 2.0365, 5.556165], fov: 40 }}
      shadows
    >
      <Scene />
      <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
  );
};