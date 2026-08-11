import React from 'react'

function ProductCard({ product, onAddToCart, isInCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>

      {isInCart ? (
        <p>{product.name} is in your cart.</p>
      ) : (
        <button type="button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default ProductCard