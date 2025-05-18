import './App.css'
import { useEffect } from 'react';
import axios from "axios";

// Components
import Card from './components/Card.jsx';

function App() {

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{console.log(res.data)})
  },[]);
  return (
    <>
      <h1>Fetching con APIS</h1>

      <Card />
    </>
  )
}

export default App;
