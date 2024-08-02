import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../redux/cartSlice';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Thanks for shopping with us!');
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button onClick={() => dispatch(removeItem(item))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
