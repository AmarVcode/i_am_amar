import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  useGLTF, 
  Environment, 
  ContactShadows,
  Html,
  useProgress
} from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import styled from 'styled-components';

const ViewerContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);
  border-radius: 10px;
  overflow: hidden;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const LoadingText = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

const Loading = () => {
  const { progress } = useProgress();
  return (
    <LoadingContainer>
      <LoadingText>
        Loading model... {Math.round(progress)}%
      </LoadingText>
    </LoadingContainer>
  );
};

// This component will be rendered inside the Canvas
const Model3D = ({ 
  modelPath, 
  scale = 1, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  autoRotate = true,
  autoRotateSpeed = 1,
  environment = 'city',
  shadows = true
}) => {
  const [hovered, setHovered] = useState(false);
  const modelRef = useRef();
  const { viewport } = useThree();
  
  // Load the 3D model
  const { scene } = useGLTF(modelPath);
  
  // Spring animation for hover effect
  const { scale: hoverScale } = useSpring({
    scale: hovered ? scale * 1.05 : scale,
    config: { mass: 1, tension: 170, friction: 26 }
  });
  
  // Continuous rotation animation when not hovered
  useFrame((state) => {
    if (modelRef.current && autoRotate && !hovered) {
      modelRef.current.rotation.y += 0.005 * autoRotateSpeed;
    }
  });
  
  const handlePointerOver = () => {
    setHovered(true);
  };
  
  const handlePointerOut = () => {
    setHovered(false);
  };
  
  return (
    <>
      <animated.group
        ref={modelRef}
        scale={hoverScale}
        position={position}
        rotation={rotation}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={scene} />
      </animated.group>
      
      {shadows && <ContactShadows position={[0, -0.5, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />}
      
      <Environment preset={environment} />
    </>
  );
};

// Main component that renders the Canvas
const ModelViewer = (props) => {
  return (
    <ViewerContainer>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true}
          autoRotate={props.autoRotate && !props.hovered}
          autoRotateSpeed={props.autoRotateSpeed}
        />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
        
        <Suspense fallback={<Html><Loading /></Html>}>
          <Model3D {...props} />
        </Suspense>
      </Canvas>
    </ViewerContainer>
  );
};

export default ModelViewer; 