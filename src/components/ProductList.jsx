import React from 'react';
import plants from '../data/plants';
import CategoryGallery from './CategoryGalley';

const ProductList = () => {
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div>
      {categories.map(category => (
        <CategoryGallery
          key={category}
          category={category}
          plants={plants.filter(plant => plant.category === category)}
        />
      ))}
    </div>
  );
};

export default ProductList;
