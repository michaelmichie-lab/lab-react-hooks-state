import React from 'react'
import ProductCard from './ProductCard'

const DEFAULT_PRODUCTS = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.0 },
  { id: 2, name: 'Banana', category: 'Fruits', price: 0.5 },
  { id: 3, name: 'Milk', category: 'Dairy', price: 2.5 },
  { id: 4, name: 'Cheese', category: 'Dairy', price: 3.0 },
]

function ProductList({
  products = DEFAULT_PRODUCTS,
  selectedCategory = 'all',
  onAddToCart,
  cart = [],
}) {
  const safeProducts = Array.isArray(products) ? products : DEFAULT_PRODUCTS

  const filteredProducts = safeProducts.filter((product) => {
    if (!selectedCategory || selectedCategory.toLowerCase() === 'all') {
      return true
    }
    return (
      product &&
      product.category &&
      product.category.toLowerCase() === selectedCategory.toLowerCase()
    )
  })

  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => {
          const isInCart =
            Array.isArray(cart) &&
            cart.some(
              (item) => item && (item.id === product.id || item.name === product.name)
            )
          return (
            <ProductCard
              key={product.id || product.name}
              product={product}
              onAddToCart={onAddToCart}
              isInCart={isInCart}
            />
          )
        })
      )}
    </div>
  )
}

export default ProductList