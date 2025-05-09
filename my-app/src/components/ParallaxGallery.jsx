import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 4rem 0;
`;

const GalleryTrack = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
`;

const GalleryItem = styled(motion.div)`
  flex: 0 0 300px;
  height: 400px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.8));
    z-index: 1;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ItemContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
  color: white;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
  
  ${GalleryItem}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
  
  ${GalleryItem}:hover ${ItemImage} {
    transform: scale(1.1);
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const ItemDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ParallaxGallery = ({ items }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: "x"
  });
  
  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-100%"]);
  
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  return (
    <GalleryContainer>
      <GalleryTrack ref={containerRef} style={{ x }}>
        {items.map((item, index) => (
          <GalleryItem
            key={index}
            onClick={() => handleItemClick(index)}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.1 }
            }}
          >
            <ItemImage src={item.image} alt={item.title} />
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemContent>
          </GalleryItem>
        ))}
      </GalleryTrack>
    </GalleryContainer>
  );
};

export default ParallaxGallery; 