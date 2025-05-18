import React from 'react';

function Sectionone() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-3xl text-blue-600 font-bold">Evidencia 01</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Configuración inicial de entorno React + Vite + Tailwind + Axios
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <strong>Objetivo</strong><br />
            Evaluar la capacidad del estudiante para:<br />
            Configurar un entorno de desarrollo moderno con React utilizando Vite.<br />
            Instalar y configurar Tailwind CSS en un proyecto de React.<br />
            Realizar fetching de datos desde una API externa usando Axios.<br />
            Mostrar datos dinámicamente en pantalla a partir de la información recibida.
          </p>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Productos
        </button>
      </div>
    </section>
  );
}

export default Sectionone;
