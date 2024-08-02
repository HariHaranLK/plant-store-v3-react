import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({itemCount})</Link>
    </header>
  );
};

export default Header;
  