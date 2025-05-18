import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";
// Components.
import Sectionone from './components/Sectionone';
import ProductCard from './components/ProductCard'; 

function App() {

  const [products, setProducts] = useState([]);
  

  useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=10").then((res) => {
            setProducts(res.data.products);
        });
    }, []);
    
    
    

   return (
    <>
      <Sectionone />

      <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}


export default App;
