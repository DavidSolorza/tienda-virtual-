import { Html, useProgress } from '@react-three/drei';

export function LoadingSpinner() {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
        <p className="text-gray-700 font-medium">Cargando tienda 3D...</p>
        <p className="text-sm text-gray-500 mt-2">{Math.round(progress)}% completado</p>
      </div>
    </Html>
  );
}