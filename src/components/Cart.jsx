import React from "react";

// Renders the current cart contents. Purely presentational — cart
// state itself lives in App and is passed down as cartItems.
function Cart({ cartItems }) {
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            // Using index in the key here (rather than item.id) since
            // the same product can be added more than once, which
            // would otherwise create duplicate keys.
            <li key={`${item.id}-${index}`}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;