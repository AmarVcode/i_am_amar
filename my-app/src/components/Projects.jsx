import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useScrollAnimation, { staggerContainerVariants, scaleInVariants, fadeInVariants } from '../hooks/useScrollAnimation';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ProjectsContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Projects = () => {
  const { ref, controls } = useScrollAnimation();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management.',
      image: '/images/project1.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    },
    {
      title: '3D Portfolio',
      description: 'Interactive 3D portfolio website with Three.js animations.',
      image: '/images/project2.jpg',
      tech: ['Three.js', 'React', 'Framer Motion'],
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses.',
      image: '/images/project3.jpg',
      tech: ['OpenAI', 'React', 'WebSocket', 'Node.js'],
    },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={controls}
      >
        <SectionTitle variants={fadeInVariants}>My Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              variants={scaleInVariants}
              custom={index}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 