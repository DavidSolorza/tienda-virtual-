import { Object3D } from 'three';

// Optimizar geometrías para mejor rendimiento
export function optimizeModel(object: Object3D) {
  object.traverse((child) => {
    if (child.isMesh) {
      // Habilitar frustum culling
      child.frustumCulled = true;
      
      // Optimizar materiales
      if (child.material) {
        child.material.needsUpdate = false;
      }
      
      // Calcular bounding box para culling
      if (child.geometry) {
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
    }
  });
  
  return object;
}

// Configuración de calidad basada en rendimiento del dispositivo
export function getQualitySettings() {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) {
    return { shadows: false, antialias: false, pixelRatio: 1 };
  }
  
  const renderer = gl.getParameter(gl.RENDERER);
  const isHighEnd = renderer.includes('RTX') || renderer.includes('GTX') || renderer.includes('Radeon');
  
  return {
    shadows: isHighEnd,
    antialias: isHighEnd,
    pixelRatio: Math.min(window.devicePixelRatio, isHighEnd ? 2 : 1.5)
  };
}