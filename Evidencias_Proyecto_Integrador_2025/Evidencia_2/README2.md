## Estadísticas Agregadas

Se añadieron las siguientes estadísticas relacionadas con los productos filtrados:

* **Total de productos:** Muestra la cantidad total de productos que se muestran después de aplicar filtros.
* **Precio máximo:** El precio más alto de los productos mostrados.
* **Precio mínimo:** El precio más bajo de los productos mostrados.
* **Precio promedio:** El precio promedio de los productos mostrados.
* **Producto mejor calificado:** Muestra el producto con la mejor calificación entre los productos filtrados.
* **Descuento promedio:** El descuento promedio de los productos filtrados.

Estas estadísticas se calculan dinámicamente y se actualizan cada vez que se aplican filtros o se modifica la lista de productos.

## División del Código en Componentes

El código se dividió en varios componentes funcionales para mejorar la legibilidad y modularidad del proyecto. Cada componente tiene una responsabilidad específica. A continuación se describen los componentes principales:

### 1. **App.jsx**

Este es el componente principal que contiene la lógica de filtrado y gestión de estados. Es el que obtiene los productos de la API, maneja los filtros de búsqueda y categoría, y pasa los datos al componente `StatsPanel` y al componente `ProductList`.

### 2. **StatsPanel**

El componente `StatsPanel` es responsable de mostrar las estadísticas de los productos filtrados. Recibe las estadísticas como `props` y las muestra de forma sencilla sin tener lógica interna.

### 3. **ProductList**

Este componente recibe una lista de productos filtrados como `props` y se encarga de mostrar cada producto utilizando el componente `ProductCard`. Este componente asegura que los productos sean renderizados correctamente sin lógica de estado propia.

### 4. **ProductCard**

El componente `ProductCard` muestra la información de un solo producto, como su título, categoría, descripción y un enlace para obtener más información. Este componente es reutilizable para cada producto individual.

### 5. **Sectionone**

Este componente puede ser utilizado como la sección de encabezado o de bienvenida de la aplicación, y es utilizado al inicio de la interfaz.

## Estructura de Archivos

La estructura de archivos del proyecto es la siguiente:

```
/src
  /components
    ProductCard.jsx
    ProductList.jsx
    StatsPanel.jsx
    Sectionone.jsx
  App.jsx
  App.css
```

## Instalación

1. Clona el repositorio a tu máquina local.

   ```bash
   git clone [<url_del_repositorio>](https://github.com/BarberoMaciel/Proyecto_Integrador_2025.git)
   ```

2. Instala las dependencias necesarias.

   ```bash
   npm install
   ```

3. Inicia el proyecto.

   ```bash
   npm start
   ```

El proyecto debería estar disponible en `http://localhost:3000`.

---
## Capturas de Pantalla

Aquí se muestran algunas imágenes del funcionamiento de la aplicación:

### Pantalla Inicial (Img1)

![Pantalla Inicial](./images/Img1.png)

### Filtros y Estadísticas (Img2)

![Filtros y Estadísticas](./images/Img2.png)

### Lista de Productos (Img3)

![Lista de Productos](./images/Img3.png)

