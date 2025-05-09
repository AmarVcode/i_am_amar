import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import GalaxyBackground from '../3d/GalaxyBackground';
import AnimatedText3D from '../3d/Text3D';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Content = styled(motion.div)`
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-family: 'Sora', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.button)`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 500;
  background: ${props => props.primary ? 'linear-gradient(45deg, var(--primary), var(--secondary))' : 'transparent'};
  border: 2px solid var(--primary);
  color: ${props => props.primary ? 'var(--background)' : 'var(--primary)'};
  transition: all 0.3s ease;
  font-family: 'Sora', sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px var(--primary);
    
    &::before {
      opacity: 1;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GalaxyBackground />
        <AnimatedText3D 
          text="Your Name" 
          position={[0, 2, 0]} 
          rotation={[0, 0, 0]} 
          scale={1} 
          color="#00ff9d" 
        />
        <AnimatedText3D 
          text="Developer" 
          position={[0, -2, 0]} 
          rotation={[0, 0, 0]} 
          scale={0.8} 
          color="#ff00ff" 
        />
      </Canvas>
      
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Name
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer
        </Subtitle>
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            primary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </Button>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </Button>
        </ButtonContainer>
      </Content>
    </HeroContainer>
  );
};

export default Hero; 