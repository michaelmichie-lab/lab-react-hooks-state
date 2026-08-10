import React from 'react';

function Cart({ cart = [] }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
