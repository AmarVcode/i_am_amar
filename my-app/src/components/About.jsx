import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useScrollAnimation, { scrollVariants, staggerContainerVariants } from '../hooks/useScrollAnimation';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const AboutContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(132, 250, 176, 0.2), rgba(143, 211, 244, 0.2));
    z-index: 1;
  }
`;

const About = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <AboutSection id="about">
      <AboutContainer
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={controls}
      >
        <AboutContent variants={scrollVariants}>
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate developer with a keen interest in creating beautiful and functional web experiences. 
            With a strong foundation in modern web technologies, I love bringing ideas to life through code.
          </p>
          <p>
            My journey in web development started with curiosity and has evolved into a professional pursuit of excellence. 
            I specialize in React, Three.js, and modern JavaScript, always staying up-to-date with the latest trends and best practices.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing my knowledge with the developer community.
          </p>
        </AboutContent>
        <AboutImage variants={scrollVariants}>
          <img src="/images/profile.jpg" alt="Profile" />
        </AboutImage>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 