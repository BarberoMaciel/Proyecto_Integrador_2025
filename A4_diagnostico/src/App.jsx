import './App.css';
import Saludo from "./components/Saludo.jsx";
import Presentacion from "./components/Presentacion.jsx";

function App() {
  

  return (
    <>
     
      <h1>Actividad 4 diagnóstico.</h1>
      <Saludo nombre="Martín" />
      <Presentacion nombre="Juan" edad ="28" profesion="arquitecto" />
      <Presentacion nombre="María" edad ="28" profesion="abogada" />
      <Presentacion nombre="Soledad" edad ="20" profesion="estudiante" />
      
    </>
  )
}

export default App;