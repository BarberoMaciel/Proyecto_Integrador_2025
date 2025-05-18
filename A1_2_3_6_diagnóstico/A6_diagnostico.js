const productos = [
    { nombre: "Notebook", precio: 1200 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 },
    ];

// 1.
const productos_filtrados = productos.filter((productos)=>{return productos.precio > 100});

console.log(`Los productos filtrados son: `,productos_filtrados);


// 2.
const productos_mapeados = productos.map(producto => `- ${producto.nombre} - $${producto.precio}`);

console.log("Listado de productos:");
console.log(productos_mapeados.join("\n"));


// 3.

const total = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
  }, 0);
  
  console.log(`Total: $${total}`);

  // 4.
  const resultado = productos.filter(producto => producto.precio < 100)
  .map(producto => producto.nombre.toLowerCase());

console.log(resultado);