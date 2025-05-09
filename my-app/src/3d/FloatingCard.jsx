import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCard({ position, rotation, scale, title, description, image, link }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  const { scale: springScale, rotationY } = useSpring({
    scale: hovered ? 1.1 : 1,
    rotationY: hovered ? Math.PI / 4 : 0,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={springScale}
      rotation-y={rotationY}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 3, 0.1]} />
      <meshStandardMaterial
        color="#00ff9d"
        metalness={0.8}
        roughness={0.2}
        emissive="#00ff9d"
        emissiveIntensity={hovered ? 0.5 : 0.2}
      />
      
      <Html
        position={[0, 0, 0.06]}
        transform
        occlude
        style={{
          width: '200px',
          height: '300px',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '10px',
          padding: '20px',
          color: 'white',
          pointerEvents: 'none',
          transform: 'translate(-100px, -150px)',
          overflow: 'hidden'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '120px', 
              objectFit: 'cover',
              borderRadius: '5px',
              marginBottom: '10px'
            }} 
          />
          <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{title}</h3>
          <p style={{ margin: '0', fontSize: '14px', opacity: 0.8 }}>{description}</p>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '5px 15px',
                background: 'linear-gradient(45deg, #00ff9d, #ff00ff)',
                borderRadius: '20px',
                color: 'black',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              View Project
            </a>
          )}
        </div>
      </Html>
    </animated.mesh>
  );
}

export default FloatingCard; 