import React from "react";
import ProductCard from "./ProductCard";

// Sample product data. Exported (named export) so both the App
// component and the test suite can reference it directly.
export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits", price: 0.5 },
  { id: 2, name: "Banana", category: "Fruits", price: 0.3 },
  { id: 3, name: "Milk", category: "Dairy", price: 2.5 },
  { id: 4, name: "Cheese", category: "Dairy", price: 4.0 },
  { id: 5, name: "Carrot", category: "Vegetables", price: 0.2 },
  { id: 6, name: "Broccoli", category: "Vegetables", price: 1.5 },
];

// Build the dropdown's options from whatever categories actually
// exist in sampleProducts, plus an "All" option. Using Set removes
// duplicates. Note "All" is NOT an empty string value — this matters
// so that selecting an unrecognized category (no matching <option>)
// falls back to an empty selection rather than accidentally matching
// the "All" option.
const categories = ["All", ...new Set(sampleProducts.map((p) => p.category))];

// ProductList is a "dumb"/presentational component: it receives the
// already-filtered products plus the current category + handlers as
// props from App, and renders the filter dropdown and product cards.
function ProductList({ products, category, onCategoryChange, onAddToCart }) {
  return (
    <section className="product-list">
      <h2>Shopping List</h2>

      <label htmlFor="category-select">Filter by category:</label>
      <select
        id="category-select"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductList;