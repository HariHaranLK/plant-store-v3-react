import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Houseplants Store</h1>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
