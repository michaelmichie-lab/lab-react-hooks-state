import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  // darkMode: drives the toggle button's label and (optionally) a
  // CSS class on the root wrapper for light/dark styling.
  const [darkMode, setDarkMode] = useState(false);

  // cart: a running list of products the user has clicked
  // "Add to Cart" on. Owned here so both ProductList (which adds)
  // and Cart (which displays) can share it.
  const [cart, setCart] = useState([]);

  // category: which category the ProductList dropdown is currently
  // filtering by. "All" shows every product.
  const [category, setCategory] = useState("All");

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Derived value — filtered on every render from sampleProducts +
  // category, rather than stored separately in state.
  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category);

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <h1>Grocery Shopping App</h1>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <ProductList
        products={filteredProducts}
        category={category}
        onCategoryChange={setCategory}
        onAddToCart={handleAddToCart}
      />
      <Cart cartItems={cart} />
    </div>
  );
}

export default App;