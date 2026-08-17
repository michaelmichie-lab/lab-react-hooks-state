import React from "react";

// Displays a single product with an "Add to Cart" button. Clicking
// the button calls onAddToCart (passed down from App) with this
// product, so App's cart state is the single source of truth.
function ProductCard({ product, onAddToCart }) {
  return (
    <li className="product-card">
      <span className="product-name">{product.name}</span>
      <span className="product-price"> — ${product.price.toFixed(2)}</span>
      <button
        // data-testid lets tests target a specific product's button
        // reliably, since product names could repeat in theory.
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;