import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import styled from 'styled-components';

const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

// This component will be rendered inside the Canvas
const Scene3DContent = ({ 
  starsCount = 5000,
  starsDepth = 50,
  starsFactor = 4,
  starsSaturation = 0.5,
  autoRotate = true,
  autoRotateSpeed = 0.5
}) => {
  const starsRef = useRef();
  
  // Continuous rotation animation
  useFrame((state, delta) => {
    if (starsRef.current && autoRotate) {
      starsRef.current.rotation.x -= delta / 10 * autoRotateSpeed;
      starsRef.current.rotation.y -= delta / 15 * autoRotateSpeed;
    }
  });
  
  return (
    <>
      <Stars 
        ref={starsRef}
        radius={100} 
        depth={starsDepth} 
        count={starsCount} 
        factor={starsFactor} 
        saturation={starsSaturation} 
        fade 
        speed={1}
      />
      <Environment preset="night" />
    </>
  );
};

// Main component that renders the Canvas
const Scene3D = (props) => {
  return (
    <SceneContainer>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          autoRotate={props.autoRotate}
          autoRotateSpeed={props.autoRotateSpeed}
        />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <Scene3DContent {...props} />
      </Canvas>
    </SceneContainer>
  );
};

export default Scene3D; 