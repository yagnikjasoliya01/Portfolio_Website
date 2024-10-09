import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import PropTypes from "prop-types"; 
import CanvasLoader from "../Loader"; 

// Ball Component
const Ball = ({ imgUrl }) => {
  const [decal, error] = useTexture([imgUrl]);

  if (error) {
    console.error("Texture failed to load:", error);
    return null; // Prevent component from rendering if texture loading fails
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 1]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Prop Types for Ball component
Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired, // Ensure imgUrl is passed as a string
};

// BallCanvas Component
const BallCanvas = ({ icon }) => {
  return (
    <Canvas 
      frameloop="demand" 
      dpr={[1, 2]} 
      gl={{ preserveDrawingBuffer: true }} 
      shadows // Enable shadows in the Canvas
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// Prop Types for BallCanvas component
BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired, // Ensure icon is passed as a string
};

export default BallCanvas;
