import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import ParallaxSection3D from './components/ParallaxSection3D';
import { 
  Heading, 
  SubHeading, 
  Text, 
  GradientText, 
  TextContainer, 
  textVariants 
} from './components/Typography';
import FloatingCard3D from './components/FloatingCard3D';
import ModelViewer from './components/ModelViewer';
import ParallaxGallery from './components/ParallaxGallery';
import Cursor3D from './components/Cursor3D';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  GlowButton,
  ButtonGroup,
  buttonVariants
} from './components/Button';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

const AppContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--background);
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

// Sample project data for the gallery
const projectItems = [
  {
    title: "3D Portfolio Website",
    description: "A modern portfolio with Three.js and React",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Interactive Dashboard",
    description: "Data visualization with D3.js",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack shopping experience",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Mobile App Design",
    description: "UI/UX for fitness tracking",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "3D Game Experience",
    description: "WebGL-based interactive game",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <Router>
        <AppContainer>
          <GlobalStyles />
          <AnimatePresence mode="wait">
            {isLoading ? (
              <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />
            ) : (
              <>
                <Cursor3D />
                <Navigation />
                <MainContent>
                  <ParallaxSection3D 
                    id="hero"
                    starsCount={7000}
                    starsFactor={5}
                    autoRotateSpeed={0.7}
                  >
                    <TextContainer
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.2
                          }
                        }
                      }}
                    >
                      <Heading size="large" variants={textVariants}>
                        Welcome to My Portfolio
                      </Heading>
                      <GradientText size="large" variants={textVariants}>
                        Full-stack Developer & Creative Technologist
                      </GradientText>
                      <ButtonGroup>
                        <PrimaryButton
                          size="large"
                          variants={buttonVariants}
                          initial="initial"
                          animate="animate"
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => scrollToSection('projects')}
                        >
                          View Projects
                        </PrimaryButton>
                        <OutlineButton
                          size="large"
                          variants={buttonVariants}
                          initial="initial"
                          animate="animate"
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => scrollToSection('contact')}
                        >
                          Contact Me
                        </OutlineButton>
                      </ButtonGroup>
                    </TextContainer>
                  </ParallaxSection3D>
                  
                  <ParallaxSection3D 
                    id="about"
                    starsCount={4000}
                    starsFactor={3}
                    autoRotateSpeed={0.3}
                  >
                    <TextContainer>
                      <SubHeading size="medium" variants={textVariants}>
                        About Me
                      </SubHeading>
                      <Text variants={textVariants}>
                        Passionate about creating innovative digital experiences that combine
                        cutting-edge technology with beautiful design.
                      </Text>
                      <ButtonGroup>
                        <SecondaryButton
                          variants={buttonVariants}
                          initial="initial"
                          animate="animate"
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => scrollToSection('skills')}
                        >
                          View Skills
                        </SecondaryButton>
                      </ButtonGroup>
                    </TextContainer>
                  </ParallaxSection3D>
                  
                  <ParallaxSection3D 
                    id="skills"
                    starsCount={5000}
                    starsFactor={4}
                    autoRotateSpeed={0.5}
                  >
                    <TextContainer>
                      <SubHeading size="medium" variants={textVariants}>
                        Skills & Expertise
                      </SubHeading>
                      <Text variants={textVariants}>
                        A comprehensive overview of my technical skills and proficiencies
                      </Text>
                    </TextContainer>
                    <Skills />
                  </ParallaxSection3D>
                  
                  <ParallaxSection3D 
                    id="projects"
                    starsCount={6000}
                    starsFactor={4.5}
                    autoRotateSpeed={0.4}
                  >
                    <TextContainer>
                      <SubHeading size="medium" variants={textVariants}>
                        Projects
                      </SubHeading>
                      <Text variants={textVariants}>
                        A showcase of my recent work and creative experiments
                      </Text>
                    </TextContainer>
                    <Projects />
                  </ParallaxSection3D>
                  
                  <ParallaxSection3D 
                    id="contact"
                    starsCount={3000}
                    starsFactor={3.5}
                    autoRotateSpeed={0.2}
                  >
                    <TextContainer>
                      <SubHeading size="medium" variants={textVariants}>
                        Get in Touch
                      </SubHeading>
                      <Text variants={textVariants}>
                        Have a project in mind? Let's create something amazing together.
                      </Text>
                    </TextContainer>
                    <Contact />
                  </ParallaxSection3D>
                </MainContent>
                <Footer />
                <ScrollToTop />
              </>
            )}
          </AnimatePresence>
        </AppContainer>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
