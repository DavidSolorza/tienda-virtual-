import { useState } from 'react';
import { Scene3D } from '../components/3D/Scene3D';
import { Navigation } from '../components/UI/Navigation';
import { ProductInfo } from '../components/UI/ProductInfo';
import { Controls } from '../components/UI/Controls';
import { products } from '../data/products';

export function StorePage() {
  const [activeSection, setActiveSection] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>();
  
  const currentProduct = selectedProduct 
    ? products.find(p => p.id === selectedProduct) 
    : null;

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(selectedProduct === productId ? undefined : productId);
  };

  const handleResetView = () => {
    // Esta función se puede expandir para resetear la cámara
    console.log('Resetting 3D view...');
  };

  return (
    <div className="w-full h-screen bg-gray-50 relative overflow-hidden">
      {/* Navegación */}
      <Navigation 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      {/* Controles 3D */}
      <Controls onReset={handleResetView} />
      
      {/* Información del producto */}
      <ProductInfo 
        product={currentProduct}
        onClose={() => setSelectedProduct(undefined)}
      />
      
      {/* Escena 3D */}
      <Scene3D 
        selectedProduct={selectedProduct}
        onProductSelect={handleProductSelect}
      />
      
      {/* Header */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-6 py-3 z-10">
        <h1 className="text-xl font-bold text-gray-800">Tienda Virtual 3D</h1>
        <p className="text-sm text-gray-600">Explora nuestros productos en 3D</p>
      </div>
    </div>
  );
}