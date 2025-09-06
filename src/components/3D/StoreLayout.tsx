import { storeSections } from '../../data/products';
import { ProductDisplay } from './ProductDisplay';
import { SectionLabel } from './SectionLabel';

interface StoreLayoutProps {
  selectedProduct?: string;
  onProductSelect: (productId: string) => void;
}

export function StoreLayout({ selectedProduct, onProductSelect }: StoreLayoutProps) {
  return (
    <group>
      {/* Suelo de la tienda */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[30, 0.2, 20]} />
        <meshStandardMaterial color="#f3f4f6" />
      </mesh>
      
      {/* Paredes */}
      <mesh position={[0, 3, -10]} receiveShadow>
        <boxGeometry args={[30, 6, 0.2]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      
      <mesh position={[-15, 3, 0]} receiveShadow>
        <boxGeometry args={[0.2, 6, 20]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      
      <mesh position={[15, 3, 0]} receiveShadow>
        <boxGeometry args={[0.2, 6, 20]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      
      {/* Secciones de productos */}
      {storeSections.map((section) => (
        <group key={section.id} position={section.position}>
          <SectionLabel text={section.name} position={[0, 4, 0]} />
          
          {/* Plataforma de la sección */}
          <mesh position={[0, 0.1, 0]} receiveShadow>
            <boxGeometry args={[4, 0.2, 4]} />
            <meshStandardMaterial color="#ddd6fe" />
          </mesh>
          
          {/* Productos en la sección */}
          {section.products.map((product, index) => (
            <ProductDisplay
              key={product.id}
              product={product}
              position={[
                (index - section.products.length / 2 + 0.5) * 1.5,
                1,
                0
              ]}
              isSelected={selectedProduct === product.id}
              onSelect={() => onProductSelect(product.id)}
            />
          ))}
        </group>
      ))}
    </group>
  );
}