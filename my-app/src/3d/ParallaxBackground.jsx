import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

function ParallaxBackground() {
  const ref = useRef();
  const { scrollY } = useScroll();
  const { viewport } = useThree();
  
  // Create a large number of particles
  const count = 2000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  // Generate random positions and colors
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    
    // Position particles in a sphere
    const radius = Math.random() * 20;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
    
    // Create a gradient color from primary to secondary
    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.5);
    
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }
  
  // Create geometry and material
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });
  
  // Animate based on scroll position
  useFrame((state) => {
    if (ref.current) {
      // Rotate based on scroll position
      ref.current.rotation.y = scrollY.offset * 0.5;
      ref.current.rotation.x = scrollY.offset * 0.2;
      
      // Scale based on scroll position
      const scale = 1 + scrollY.offset * 0.2;
      ref.current.scale.set(scale, scale, scale);
      
      // Move particles based on mouse position
      const mouseX = (state.mouse.x * 0.5) * viewport.factor;
      const mouseY = (state.mouse.y * 0.5) * viewport.factor;
      
      ref.current.position.x = mouseX;
      ref.current.position.y = mouseY;
    }
  });
  
  return (
    <points ref={ref} geometry={geometry} material={material} />
  );
}

export default ParallaxBackground; 