import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Grid, Stats } from '@react-three/drei';
import { Suspense } from 'react';
import { StoreLayout } from './StoreLayout';
import { LoadingSpinner } from './LoadingSpinner';

interface Scene3DProps {
  selectedProduct?: string;
  onProductSelect: (productId: string) => void;
}

export function Scene3D({ selectedProduct, onProductSelect }: Scene3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 5, 10], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        shadows
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          {/* Iluminación optimizada */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          {/* Entorno y controles */}
          <Environment preset="warehouse" />
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={50}
            maxPolarAngle={Math.PI / 2}
          />
          
          {/* Grid del suelo */}
          <Grid 
            position={[0, -0.01, 0]}
            args={[20, 20]}
            cellSize={1}
            cellThickness={0.5}
            cellColor="#6b7280"
            sectionSize={5}
            sectionThickness={1}
            sectionColor="#374151"
            fadeDistance={25}
            fadeStrength={1}
          />
          
          {/* Layout de la tienda */}
          <StoreLayout 
            selectedProduct={selectedProduct}
            onProductSelect={onProductSelect}
          />
          
          {/* Stats para desarrollo */}
          {process.env.NODE_ENV === 'development' && <Stats />}
        </Suspense>
      </Canvas>
    </div>
  );
}