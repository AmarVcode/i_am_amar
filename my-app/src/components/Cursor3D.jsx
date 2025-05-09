import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styled from 'styled-components';

const CursorContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const CursorDot = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: #4ecdc4;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
`;

const CursorRing = styled(motion.div)`
  position: fixed;
  width: 32px;
  height: 32px;
  border: 2px solid #ff6b6b;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
`;

const CursorText = styled(motion.div)`
  position: fixed;
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px 10px;
  border-radius: 4px;
  pointer-events: none;
  z-index: 9997;
  white-space: nowrap;
`;

const Cursor3D = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX);
      cursorY.set(clientY);
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleLinkHover = (e) => {
      const target = e.target;
      
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setHoverText(target.textContent || 'Click me');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleLinkHover);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, [cursorX, cursorY]);
  
  return (
    <CursorContainer>
      <CursorDot
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isVisible ? 1 : 0,
        }}
      />
      <CursorRing
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
        }}
      />
      {isHovering && (
        <CursorText
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '20px',
          }}
        >
          {hoverText}
        </CursorText>
      )}
    </CursorContainer>
  );
};

export default Cursor3D; 