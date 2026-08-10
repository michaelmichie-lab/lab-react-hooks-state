import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)

  // State for cart management
  const [cart, setCart] = useState([])

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Handler to toggle dark mode
  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  // Handler to add an item to the cart
  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart((prevCart) => [...prevCart, product])
    }
  }

  // Handler to change the category filter
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

      {/* Dark Mode Toggle Button Component */}
      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Category Filter Dropdown */}
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
        </select>
      </div>

      {/* Product List Component */}
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
        cart={cart}
      />

      {/* Shopping Cart Component */}
      <Cart cart={cart} />
    </div>
  )
}

export default App