import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const PRODUCTS = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.0 },
  { id: 2, name: 'Banana', category: 'Fruits', price: 0.5 },
  { id: 3, name: 'Milk', category: 'Dairy', price: 2.5 },
  { id: 4, name: 'Cheese', category: 'Dairy', price: 3.0 },
]

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  const handleAddToCart = (product) => {
    if (!product) return
    setCart((prevCart) => {
      const exists = prevCart.some(
        (item) => item && (item.id === product.id || item.name === product.name)
      )
      if (exists) return prevCart
      return [...prevCart, product]
    })
  }

  // Handler to remove an item from cart state
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        darkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      <div style={{ margin: '15px 0' }}>
        <label htmlFor="category-select">Filter by Category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
        </select>
      </div>

      <ProductList
        products={PRODUCTS}
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        cart={cart}
      />

      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  )
}

export default App