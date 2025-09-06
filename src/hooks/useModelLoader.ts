import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function useModelLoader(modelPath: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const { scene, error: gltfError } = useGLTF(modelPath);
  
  useEffect(() => {
    if (gltfError) {
      setError(gltfError);
      setIsLoading(false);
    } else if (scene) {
      setIsLoading(false);
    }
  }, [scene, gltfError]);
  
  return { scene, isLoading, error };
}

// Hook para precargar múltiples modelos
export function usePreloadModels(modelPaths: string[]) {
  useEffect(() => {
    modelPaths.forEach(path => {
      useGLTF.preload(path);
    });
  }, [modelPaths]);
}