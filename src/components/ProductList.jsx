import React from 'react';
import ProductCard from './ProductCard';

// Sample product dataset if not provided directly via props
const DEFAULT_PRODUCTS = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.0 },
  { id: 2, name: 'Banana', category: 'Fruits', price: 0.5 },
  { id: 3, name: 'Milk', category: 'Dairy', price: 2.5 },
  { id: 4, name: 'Cheese', category: 'Dairy', price: 3.0 },
];

function ProductList({ products = DEFAULT_PRODUCTS, selectedCategory, onAddToCart, cart = [] }) {
  // Filter products by selectedCategory (handles 'all' case-insensitively)
  const filteredProducts = products.filter((product) => {
    if (!selectedCategory || selectedCategory.toLowerCase() === 'all') {
      return true;
    }
    return product.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="product-list">
      {filteredProducts.map((product) => {
        const isInCart = cart.some((item) => item.id === product.id);
        return (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            isInCart={isInCart}
          />
        );
      })}
    </div>
  );
}

export default ProductList;