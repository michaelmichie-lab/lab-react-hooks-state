import React from 'react'

function ProductCard({ product, onAddToCart, onRemoveFromCart, isInCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>

      {isInCart ? (
        <div>
          <p>{product.name} is in your cart.</p>
          <button type="button" onClick={() => onRemoveFromCart(product.id)}>
            Remove from Cart
          </button>
        </div>
      ) : (
        <button type="button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default ProductCard