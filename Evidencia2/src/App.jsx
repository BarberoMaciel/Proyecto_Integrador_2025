import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
// Componentes
import Sectionone from './components/Sectionone';
import StatsPanel from './components/StatsPanel';
import ProductList from './components/ProductList'; // Importa el nuevo componente

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(''); // Cambié esto para permitir 'All'
  const [categories, setCategories] = useState([]);

  // Obtener productos de la API.
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100").then((res) => {
      setProducts(res.data.products);

      // Extraer categorías únicas de los productos.
      const uniqueCategories = [
        ...new Set(res.data.products.map((product) => product.category))
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  // Filtrar productos cuando cambian los filtros de búsqueda o categoría.
  useEffect(() => {
    const filtered = products.filter(product =>
      (category === '' || product.category === category) &&  // Cambié esta parte para que 'All' funcione
      (search ? product.title.toLowerCase().includes(search.toLowerCase()) : true)
    );
    setFilteredProducts(filtered);
  }, [search, category, products]);

  // Estadísticas seguras
  const totalProducts = filteredProducts.length;
  const maxProduct = totalProducts > 0 ? Math.max(...filteredProducts.map((p) => p.price)) : 0;
  const minProduct = totalProducts > 0 ? Math.min(...filteredProducts.map((p) => p.price)) : 0;
  const avgProduct = totalProducts > 0 ? filteredProducts.reduce((sum, p) => sum + p.price, 0) / totalProducts : 0;
  const topRated = totalProducts > 0 ? filteredProducts.reduce((a, b) => a.rating > b.rating ? a : b) : { title: "N/A", rating: 0 };
  const avgDiscount = totalProducts > 0 ? filteredProducts.reduce((sum, p) => sum + p.discountPercentage, 0) / totalProducts : 0;

  return (
    <>
      <Sectionone />

      <StatsPanel 
        totalProducts={totalProducts}
        maxProduct={maxProduct}
        minProduct={minProduct}
        avgProduct={avgProduct}
        topRated={topRated}
        avgDiscount={avgDiscount}
      />

      {/* Barra de filtros */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 p-4 bg-white shadow mb-4">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full sm:w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full sm:w-1/4"
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Usamos el nuevo componente ProductList para mostrar los productos */}
      <ProductList filteredProducts={filteredProducts} />
    </>
  );
}

export default App;
