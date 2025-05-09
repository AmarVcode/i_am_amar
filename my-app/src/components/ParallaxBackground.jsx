import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';

const ParallaxBackground = ({ count = 5000, depth = 50, factor = 4, saturation = 0.5 }) => {
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => {
      return random.inSphere(new THREE.Vector3(), { radius: 1.5 });
    });
    return p;
  }, [count]);

  const sphere = useRef();

  useFrame((state, delta) => {
    sphere.current.rotation.x -= delta / 10;
    sphere.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={sphere}
        positions={points}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default ParallaxBackground; 