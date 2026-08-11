import React from 'react'

function Cart({ cart = [], onRemoveFromCart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id || item.name} style={{ marginBottom: '8px' }}>
              {item.name} is in your cart.{' '}
              <button
                type="button"
                onClick={() => onRemoveFromCart(item.id)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
