import React from 'react';
import ProductCard from './ProductCard';
import './CategoryGallery.css';

const CategoryGallery = ({ plants, category }) => {
  return (
    <div className="category-gallery">
      <h2>{category}</h2>
      <div className="plants-container">
        {plants.map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGallery;
