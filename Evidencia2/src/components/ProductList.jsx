import React from 'react';
import ProductCard from './ProductCard'; // Asegúrate de que la ruta sea correcta

function ProductList({ filteredProducts }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
