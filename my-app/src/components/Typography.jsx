import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Heading = styled(motion.h1)`
  font-size: ${props => props.size === 'large' ? '4rem' : 
              props.size === 'medium' ? '3rem' : '2rem'};
  font-weight: 700;
  background: linear-gradient(120deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: ${props => props.size === 'large' ? '3rem' : 
                props.size === 'medium' ? '2.5rem' : '1.8rem'};
  }
`;

export const SubHeading = styled(motion.h2)`
  font-size: ${props => props.size === 'large' ? '2.5rem' : 
              props.size === 'medium' ? '2rem' : '1.5rem'};
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: ${props => props.size === 'large' ? '2rem' : 
                props.size === 'medium' ? '1.8rem' : '1.3rem'};
  }
`;

export const Text = styled(motion.p)`
  font-size: ${props => props.size === 'large' ? '1.25rem' : 
              props.size === 'medium' ? '1.1rem' : '1rem'};
  line-height: 1.6;
  color: ${props => props.color || 'rgba(255, 255, 255, 0.8)'};
  margin-bottom: ${props => props.marginBottom || '1rem'};
  text-align: ${props => props.align || 'center'};
  max-width: ${props => props.maxWidth || '800px'};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: ${props => props.size === 'large' ? '1.1rem' : 
                props.size === 'medium' ? '1rem' : '0.9rem'};
  }
`;

export const GradientText = styled(Text)`
  background: linear-gradient(120deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

export const HighlightText = styled(Text)`
  color: #4ecdc4;
  font-weight: 600;
`;

// Animation variants for text elements
export const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Stagger container for text elements
export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.gap || '1rem'};
`; 