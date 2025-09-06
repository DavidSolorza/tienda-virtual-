import { Product } from '../../types/Product';
import { ShoppingCart, Eye, RotateCcw } from 'lucide-react';

interface ProductInfoProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductInfo({ product, onClose }: ProductInfoProps) {
  if (!product) return null;

  return (
    <div className="absolute top-4 right-4 w-80 bg-white rounded-lg shadow-xl p-6 z-10">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
      </div>
      
      {product.thumbnail && (
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-32 object-cover rounded-lg mb-4"
        />
      )}
      
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {product.description}
      </p>
      
      <div className="flex items-center justify-between mb-6">
        <span className="text-2xl font-bold text-indigo-600">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {product.category}
        </span>
      </div>
      
      <div className="space-y-3">
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Agregar al Carrito
        </button>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <Eye size={16} />
            Vista Detallada
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <RotateCcw size={16} />
            Rotar
          </button>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          💡 Usa el mouse para rotar, hacer zoom y mover la vista 3D
        </p>
      </div>
    </div>
  );
}