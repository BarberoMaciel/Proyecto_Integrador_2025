import React from 'react';
import StatCard from './StatCard'; // Importar el nuevo componente

function StatsPanel({
  totalProducts,
  maxProduct,
  minProduct,
  avgProduct,
  topRated,
  avgDiscount
}) {
  return (
    <section className="p-6 bg-gray-50">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estadísticas de Productos</h3>
      
      {/* Contenedor centrado para las tarjetas */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Usamos StatCard para cada una de las estadísticas */}
        <StatCard label="Total de productos" value={totalProducts} />
        <StatCard label="Precio máximo" value={maxProduct} isCurrency={true} />
        <StatCard label="Precio mínimo" value={minProduct} isCurrency={true} />
        <StatCard label="Precio promedio" value={avgProduct} isCurrency={true} />
        <StatCard label="Producto mejor calificado" value={`${topRated.title} (${topRated.rating} estrellas)`} />
        <StatCard label="Descuento promedio" value={avgDiscount} />
      </div>
    </section>
  );
}

export default StatsPanel;
