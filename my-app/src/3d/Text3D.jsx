import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

function AnimatedText3D({ text, position, rotation, scale, color }) {
  const meshRef = useRef();
  
  const { rotationY } = useSpring({
    from: { rotationY: 0 },
    to: { rotationY: Math.PI * 2 },
    loop: true,
    config: { duration: 10000 }
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <animated.group
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      rotation-y={rotationY}
    >
      <Center>
        <Text3D
          font="/fonts/Orbitron_Bold.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial
            color={color}
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.5}
          />
        </Text3D>
      </Center>
    </animated.group>
  );
}

export default AnimatedText3D; 