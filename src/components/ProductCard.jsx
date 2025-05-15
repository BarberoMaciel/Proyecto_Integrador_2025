// src/components/ProductCard.jsx
import React from 'react';

function ProductCard(props) {
  const { title, brand, category, price, rating, thumbnail } = props.product;

  return ( 
    <div className="border rounded-lg p-4 bg-white shadow-md w-64">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">{brand} - {category}</p>
      <p className="text-green-600 font-bold mt-2">${price}</p>
      <p className="text-sm text-yellow-600">⭐ {rating}</p>
    </div>
  );
};

export default ProductCard;


