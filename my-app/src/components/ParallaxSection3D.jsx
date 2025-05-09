import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import Scene3D from './Scene3D';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ParallaxSection3D = ({ 
  children, 
  id,
  starsCount = 5000,
  starsDepth = 50,
  starsFactor = 4,
  starsSaturation = 0.5,
  autoRotate = true,
  autoRotateSpeed = 0.5,
  parallaxFactor = 0.1
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the content
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * parallaxFactor]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <SectionContainer ref={sectionRef} id={id}>
      {/* 3D Background */}
      <Scene3D 
        starsCount={starsCount}
        starsDepth={starsDepth}
        starsFactor={starsFactor}
        starsSaturation={starsSaturation}
        autoRotate={autoRotate}
        autoRotateSpeed={autoRotateSpeed}
      />
      
      {/* Content with parallax effect */}
      <ContentContainer
        style={{ 
          y,
          opacity
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </ContentContainer>
    </SectionContainer>
  );
};

export default ParallaxSection3D; 