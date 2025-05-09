import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Text, Box, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  perspective: 1000px;
`;

// This component will be rendered inside the Canvas
const FloatingCard3DContent = ({ title, description, imageUrl, color = '#4ecdc4' }) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const meshRef = useRef();
  const { viewport } = useThree();
  
  // Mouse tracking for 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
  };
  
  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHovered(false);
  };
  
  const handleClick = (e) => {
    e.stopPropagation();
    setActive(!active);
  };
  
  // Spring animation for hover and active states
  const { scale, rotationX, rotationY } = useSpring({
    scale: hovered ? 1.1 : 1,
    rotationX: hovered ? mousePosition.y * 0.2 : 0,
    rotationY: hovered ? mousePosition.x * 0.2 : 0,
    config: { mass: 1, tension: 170, friction: 26 }
  });
  
  // Update mouse position for 3D effect
  useFrame((state) => {
    if (meshRef.current) {
      const { clientX, clientY } = state.mouse;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    }
  });
  
  return (
    <animated.mesh
      ref={meshRef}
      scale={scale}
      rotation-x={rotationX}
      rotation-y={rotationY}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <Box args={[3, 4, 0.2]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.5} 
          roughness={0.2}
          envMapIntensity={0.5}
        />
      </Box>
      
      <Text
        position={[0, 1, 0.11]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        {title}
      </Text>
      
      <Text
        position={[0, -0.5, 0.11]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        {description}
      </Text>
      
      {active && (
        <mesh position={[0, -1.5, 0.11]}>
          <planeGeometry args={[2, 1]} />
          <meshBasicMaterial color="#ffffff" opacity={0.8} transparent />
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.1}
            color="#000000"
            anchorX="center"
            anchorY="middle"
          >
            Click to learn more
          </Text>
        </mesh>
      )}
    </animated.mesh>
  );
};

// Main component that renders the Canvas
const FloatingCard3D = (props) => {
  return (
    <CardContainer>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
        
        <FloatingCard3DContent {...props} />
      </Canvas>
    </CardContainer>
  );
};

export default FloatingCard3D; 