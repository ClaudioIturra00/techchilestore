# TechStore Chile

Proyecto de tienda virtual de tecnología desarrollado como parte de la asignatura de Programación Front-End.
La aplicación permite visualizar productos tecnológicos, buscarlos por nombre, agregarlos al carrito y consultar información de la tienda.

## Integrantes

- Nombre: Claudio Iturra
- Carrera: Analista Programador
- Asignatura: Programación Front-End
- Docente: César Lisandro Varela Monsalve
- Fecha: 10/07/2026

## Objetivo del proyecto

Desarrollar una aplicación web moderna y responsiva para una tienda de tecnología, utilizando React, JavaScript, CSS, Node.js, Express y MongoDB.

El proyecto busca aplicar conocimientos relacionados con:

- Componentes de React.
- Uso de Props.
- Consumo de datos desde una API.
- Filtrado de productos.
- Carrito de compras.
- Diseño responsive.
- Creación de un backend.
- Conexión con MongoDB.
- Control de versiones con Git y GitHub.

## Funcionalidades

La aplicación incluye las siguientes funcionalidades:

- Visualización de productos tecnológicos.
- Productos almacenados en MongoDB.
- Consumo de productos desde una API.
- Buscador de productos.
- Filtrado dinámico por nombre.
- Carrito de compras.
- Contador de productos agregados.
- Cálculo del total del carrito.
- Eliminación de productos del carrito.
- Mensaje al agregar productos.
- Barra de navegación.
- Banner principal.
- Sección de beneficios.
- Footer con información de contacto.
- Diseño responsive para computador, tablet y celular.
- Mensaje de error cuando el backend no está iniciado.

### Front-End

- React
- Vite
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Base de datos
- MongoDB

### Herramientas
- Git
- GitHub
- MongoDB Compass
- Geminis
- ChatGPT

## Prompts Utilizados por la IA

- Crea un archivo `productos.json` con ocho productos tecnológicos.
- Crea un componente `ProductList` que muestre los productos usando `map()`.
- Creame un Header con logo
- Cambiame todo el archivo `styles.css` y crea un diseño moderno, oscuro, futurista y con colores neón.
- Ayudame a arreglar el error de Props entre `ProductList` y `ProductCard`.
- Ayudame a crear un msg Toast que aparezca cuando se agregue un producto al carrito.
- Ayudame a revisar si funciona mongodb con mi backend

## Estructura del proyecto

techstore/
├── backend/
│   ├── models/
│   │   └── Producto.js
│   ├── routes/
│   │   └── productos.js
│   ├── cargarProductos.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Toast.jsx
│   │
│   ├── css/
│   │   └── styles.css
│   │
│   ├── data/
│   │   └── productos.json
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── IA_UTILIZADA.md
├── package.json
├── README.md
└── vite.config.js

## Instalación y ejecución del proyecto

### Requisitos previos

Antes de ejecutar el proyecto, se debe tener instalado:

- Node.js
- npm
- MongoDB Community Server
- MongoDB Compass
- Visual Studio Code
- Git

Para comprobar que Node.js y npm están instalados correctamente, se pueden ejecutar los siguientes comandos:

```bash
node -v
npm -v

```
Ambos comandos deben mostrar un número de versión.

### 1. Clonar el repositorio
Descargar el proyecto desde GitHub utilizando:

```bash
git clone URL_DEL_REPOSITORIO
```

Luego entrar a la carpeta del proyecto:

```bash
cd techstore
```

### 2. Instalar las dependencias del Front-End

Desde la carpeta principal del proyecto, ejecutar:

```bash
npm install
```

Este comando instalará React, Vite y las demás dependencias necesarias para ejecutar la interfaz de la tienda.

### 3. Instalar las dependencias del backend

Entrar a la carpeta `backend`:

```bash
cd backend
```

Luego ejecutar:

```bash
npm install
```

Este comando instalará las dependencias utilizadas por el servidor, como Express, Mongoose, CORS, Dotenv y Nodemon.

### 4. Configurar la conexión con MongoDB

Dentro de la carpeta `backend`, crear un archivo llamado `.env`.

El archivo debe contener lo siguiente:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/techstore
```

La variable `PORT` indica el puerto donde se ejecutará el backend.

La variable `MONGODB_URI` contiene la dirección de conexión con la base de datos MongoDB.

El archivo `.env` no debe subirse a GitHub, ya que contiene información de configuración.

### 5. Cargar los productos en MongoDB

Desde la carpeta `backend`, ejecutar:

```bash
node cargarProductos.js
```

Si el proceso funciona correctamente, aparecerá el siguiente mensaje:

```text
Productos cargados correctamente
```

Este archivo elimina los productos anteriores e inserta nuevamente los productos configurados dentro de `cargarProductos.js`.

### 6. Ejecutar el backend

Dentro de la carpeta `backend`, ejecutar:

```bash
npm run dev
```

Si la conexión funciona correctamente, la terminal mostrará:

```text
MongoDB conectado correctamente
Servidor ejecutándose en http://localhost:5000
```

La API de productos puede revisarse ingresando a:

```text
http://localhost:5000/api/productos
```

En esta dirección deberían aparecer los productos almacenados en MongoDB en formato JSON.

### 7. Ejecutar el Front-End

Abrir una segunda terminal en Visual Studio Code.

Si la terminal se encuentra dentro de la carpeta `backend`, volver a la carpeta principal utilizando:

```bash
cd ..
```

Luego ejecutar:

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:5173
```

### 8. Terminales necesarias

Para que el proyecto funcione correctamente, deben mantenerse abiertas dos terminales:

- Una terminal ejecutando el backend con `npm run dev`.
- Otra terminal ejecutando el Front-End con `npm run dev`.

Si el backend se detiene, React no podrá obtener los productos desde MongoDB y mostrará un mensaje de error de conexión.

### 9. Comprobación del funcionamiento

Para comprobar que el proyecto funciona correctamente:

1. Iniciar MongoDB.
2. Ejecutar el backend.
3. Abrir `http://localhost:5000/api/productos`.
4. Verificar que aparezcan los productos en formato JSON.
5. Ejecutar el Front-End.
6. Abrir `http://localhost:5173`.
7. Comprobar que se muestren los productos.
8. Probar el buscador.
9. Agregar productos al carrito.
10. Abrir el carrito y revisar el total.
11. Eliminar un producto del carrito.
12. Verificar que aparezca el mensaje de confirmación al agregar un producto.
