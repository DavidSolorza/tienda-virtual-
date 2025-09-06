import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group, Mesh } from 'three';
import type { Product } from '../../types/Product';

interface ProductDisplayProps {
  product: Product;
  position: [number, number, number];
  isSelected: boolean;
  onSelect: () => void;
}

export function ProductDisplay({ product, position, isSelected, onSelect }: ProductDisplayProps) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Cargar modelo GLB con manejo de errores
  const { scene, error } = useGLTF(product.modelPath, true);
  
  // Animación de rotación suave
  useFrame((state) => {
    if (groupRef.current) {
      if (isSelected) {
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      } else if (hovered) {
        groupRef.current.rotation.y += 0.01;
      }
      
      // Efecto de flotación para productos seleccionados
      if (isSelected) {
        groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });
  
  // Si hay error cargando el modelo, mostrar un cubo placeholder
  if (error) {
    console.warn(`Error loading model for ${product.name}:`, error);
    return (
      <group ref={groupRef} position={position}>
        <mesh
          onClick={onSelect}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          castShadow
        >
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial 
            color={isSelected ? "#8b5cf6" : hovered ? "#a78bfa" : "#6b7280"} 
          />
        </mesh>
        
        {/* Etiqueta de precio */}
        <mesh position={[0, 1.2, 0]}>
          <planeGeometry args={[1, 0.3]} />
          <meshBasicMaterial color="white" transparent opacity={0.9} />
        </mesh>
      </group>
    );
  }
  
  return (
    <group ref={groupRef} position={position}>
      {/* Modelo 3D */}
      <primitive
        object={scene.clone()}
        scale={isSelected ? 1.2 : hovered ? 1.1 : 1}
        onClick={onSelect}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      />
      
      {/* Indicador de selección */}
      {isSelected && (
        <mesh position={[0, -0.5, 0]}>
          <ringGeometry args={[0.8, 1, 32]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
        </mesh>
      )}
      
      {/* Etiqueta de precio */}
      <mesh position={[0, 1.5, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.2, 0.4]} />
        <meshBasicMaterial color="white" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

// Precargar modelos para mejor rendimiento