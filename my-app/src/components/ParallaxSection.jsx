import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const SectionContainer = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
`;

const BackgroundLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: ${props => props.background || 'transparent'};
`;

const ContentLayer = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ParallaxSection = ({ 
  children, 
  background, 
  backgroundSpeed = 0.5, 
  contentSpeed = 1,
  id,
  className
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${backgroundSpeed * 100}%`]
  );
  
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${contentSpeed * 100}%`]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  
  return (
    <SectionContainer ref={sectionRef} id={id} className={className}>
      <BackgroundLayer 
        background={background}
        style={{ 
          y: backgroundY,
          opacity
        }}
      />
      <ContentLayer style={{ y: contentY, opacity }}>
        {children}
      </ContentLayer>
    </SectionContainer>
  );
};

export default ParallaxSection; 