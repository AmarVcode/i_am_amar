import { motion } from 'framer-motion';
import styled from 'styled-components';

const PreloaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Preloader = ({ onLoadingComplete }) => {
  return (
    <PreloaderContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onLoadingComplete}
    >
      <Logo
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        Your Name
      </Logo>
    </PreloaderContainer>
  );
};

export default Preloader; 