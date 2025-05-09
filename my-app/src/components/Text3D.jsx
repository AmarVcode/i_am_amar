import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D as DreiText3D, Center, OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import styled from 'styled-components';

const TextContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

// This component will be rendered inside the Canvas
const Text3DContent = ({ 
  text, 
  size = 1, 
  height = 0.2, 
  curveSegments = 12,
  bevelEnabled = true,
  bevelThickness = 0.03,
  bevelSize = 0.02,
  bevelOffset = 0,
  bevelSegments = 5,
  color = '#4ecdc4',
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  hover = true
}) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  
  const handlePointerOver = () => {
    if (hover) setHovered(true);
  };
  
  const handlePointerOut = () => {
    if (hover) setHovered(false);
  };
  
  // Spring animation for hover effect
  const { scale, rotationY } = useSpring({
    scale: hovered ? 1.1 : 1,
    rotationY: hovered ? Math.PI * 0.1 : 0,
    config: { mass: 1, tension: 170, friction: 26 }
  });
  
  // Continuous rotation animation
  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  
  return (
    <Center>
      <animated.mesh
        ref={meshRef}
        scale={scale}
        rotation-y={rotationY}
        position={position}
        rotation={rotation}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <DreiText3D
          text={text}
          size={size}
          height={height}
          curveSegments={curveSegments}
          bevelEnabled={bevelEnabled}
          bevelThickness={bevelThickness}
          bevelSize={bevelSize}
          bevelOffset={bevelOffset}
          bevelSegments={bevelSegments}
          font="/fonts/helvetiker_regular.typeface.json"
        >
          <meshStandardMaterial 
            color={color} 
            metalness={0.5} 
            roughness={0.2}
            envMapIntensity={0.5}
          />
        </DreiText3D>
      </animated.mesh>
    </Center>
  );
};

// Main component that renders the Canvas
const Text3D = (props) => {
  return (
    <TextContainer>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
        
        <Text3DContent {...props} />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </TextContainer>
  );
};

export default Text3D; 