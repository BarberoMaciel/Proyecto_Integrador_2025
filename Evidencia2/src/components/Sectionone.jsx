import React from 'react';

function Sectionone() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-3xl text-blue-600 font-bold">Evidencia 02</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Configuración inicial de entorno React + Vite + Tailwind + Axios
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <strong>Objetivos</strong><br />
            Evaluar la capacidad del estudiante para:<br />
            Obtener datos de una API utilizando Axios.
            Aplicar filtros dinámicos usando useState y useEffect .
            Mostrar estadísticas basadas en los datos obtenidos.
            Crear y utilizar componentes reutilizables en React.
            Implementar renderizado condicional y manejo de listas.
          </p>
        </div>
        </div>
    </section>
  );
}

export default Sectionone;