import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonBase = styled(motion.button)`
  padding: ${props => props.size === 'large' ? '1rem 2.5rem' : 
            props.size === 'medium' ? '0.8rem 2rem' : '0.6rem 1.5rem'};
  font-size: ${props => props.size === 'large' ? '1.2rem' : 
              props.size === 'medium' ? '1rem' : '0.9rem'};
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: ${props => props.size === 'large' ? '0.8rem 2rem' : 
              props.size === 'medium' ? '0.6rem 1.5rem' : '0.5rem 1.2rem'};
    font-size: ${props => props.size === 'large' ? '1.1rem' : 
                props.size === 'medium' ? '0.9rem' : '0.8rem'};
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  background: linear-gradient(120deg, #ff6b6b, #4ecdc4);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  color: #fff;
  border: 2px solid #4ecdc4;

  &:hover {
    background: rgba(78, 205, 196, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const OutlineButton = styled(ButtonBase)`
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);

  &:hover {
    border-color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const GlowButton = styled(ButtonBase)`
  background: rgba(78, 205, 196, 0.1);
  color: #4ecdc4;
  border: none;
  box-shadow: 0 0 15px rgba(78, 205, 196, 0.3);

  &:hover {
    background: rgba(78, 205, 196, 0.2);
    box-shadow: 0 0 20px rgba(78, 205, 196, 0.5);
  }

  &:active {
    transform: translateY(1px);
  }
`;

// Animation variants for buttons
export const buttonVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Button container for grouping buttons
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin || '1rem 0'};
`; 