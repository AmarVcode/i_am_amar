import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import FloatingCard from '../3d/FloatingCard';

const ProjectsContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(to bottom, var(--background), #1a1a1a);
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

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and Node.js",
    image: "/path-to-project1-image.jpg",
    link: "https://project1.com",
    position: [-4, 0, 0]
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with real-time features",
    image: "/path-to-project2-image.jpg",
    link: "https://project2.com",
    position: [0, 0, 0]
  },
  {
    title: "Project 3",
    description: "A mobile app with augmented reality capabilities",
    image: "/path-to-project3-image.jpg",
    link: "https://project3.com",
    position: [4, 0, 0]
  }
];

const Projects3D = () => {
  return (
    <ProjectsContainer>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {projects.map((project, index) => (
          <FloatingCard
            key={index}
            {...project}
            rotation={[0, 0, 0]}
            scale={1}
          />
        ))}
      </Canvas>
      
      <Content
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My Projects
        </Title>
      </Content>
    </ProjectsContainer>
  );
};

export default Projects3D; 