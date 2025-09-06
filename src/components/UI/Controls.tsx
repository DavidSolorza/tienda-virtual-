import { RotateCcw, ZoomIn, ZoomOut, Move, Eye } from 'lucide-react';

interface ControlsProps {
  onReset: () => void;
}

export function Controls({ onReset }: ControlsProps) {
  return (
    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Controles 3D</h4>
        
        <div className="space-y-2 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Move size={14} />
            <span>Clic + Arrastrar: Rotar vista</span>
          </div>
          <div className="flex items-center gap-2">
            <ZoomIn size={14} />
            <span>Scroll: Zoom in/out</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={14} />
            <span>Clic derecho + Arrastrar: Mover</span>
          </div>
        </div>
        
        <button
          onClick={onReset}
          className="mt-3 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors text-sm"
        >
          <RotateCcw size={14} />
          Resetear Vista
        </button>
      </div>
    </div>
  );
}