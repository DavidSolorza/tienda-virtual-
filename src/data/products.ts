import { Product, StoreSection } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modelo de Prueba',
    description: 'Modelo 3D de ejemplo para la tienda virtual',
    price: 99.99,
    modelPath: '/src/assets/models/prueba.glb',
    category: 'electronics',
    thumbnail: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Producto Ejemplo 1',
    description: 'Otro producto de ejemplo',
    price: 149.99,
    modelPath: '/src/assets/models/prueba.glb',
    category: 'furniture',
    thumbnail: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Producto Ejemplo 2',
    description: 'Tercer producto de ejemplo',
    price: 79.99,
    modelPath: '/src/assets/models/prueba.glb',
    category: 'accessories',
    thumbnail: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const storeSections: StoreSection[] = [
  {
    id: 'electronics',
    name: 'Electrónicos',
    position: [-5, 0, 0],
    products: products.filter(p => p.category === 'electronics')
  },
  {
    id: 'furniture',
    name: 'Muebles',
    position: [0, 0, 0],
    products: products.filter(p => p.category === 'furniture')
  },
  {
    id: 'accessories',
    name: 'Accesorios',
    position: [5, 0, 0],
    products: products.filter(p => p.category === 'accessories')
  }
];