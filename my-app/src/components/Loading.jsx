import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const LoadingDots = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled(motion.div)`
  width: 0.75rem;
  height: 0.75rem;
  background: linear-gradient(120deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
`;

const LoadingText = styled(motion.p)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
`;

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const dotVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 0, -10],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Loading = ({ text = "Loading..." }) => {
  return (
    <LoadingContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <LoadingDots>
        {[...Array(3)].map((_, index) => (
          <Dot
            key={index}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: index * 0.1,
            }}
          />
        ))}
      </LoadingDots>
      <LoadingText
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {text}
      </LoadingText>
    </LoadingContainer>
  );
};

export default Loading; 