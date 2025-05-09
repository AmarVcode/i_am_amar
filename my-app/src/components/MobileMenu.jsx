import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MenuLink = styled(motion.a)`
  color: var(--text);
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: var(--text);
  font-size: 2rem;
  cursor: pointer;
`;

const MobileMenu = ({ isOpen, onClose, scrollToSection }) => {
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MenuOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CloseButton
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </CloseButton>
          <MenuContent
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MenuLink
              onClick={() => handleClick('hero')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Home
            </MenuLink>
            <MenuLink
              onClick={() => handleClick('about')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </MenuLink>
            <MenuLink
              onClick={() => handleClick('skills')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </MenuLink>
            <MenuLink
              onClick={() => handleClick('projects')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </MenuLink>
            <MenuLink
              onClick={() => handleClick('contact')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </MenuLink>
          </MenuContent>
        </MenuOverlay>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 