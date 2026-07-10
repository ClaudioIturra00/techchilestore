const mongoose = require("mongoose");
require("dotenv").config();

const Producto = require("./models/Producto");

const productos = [
  {
    nombre: "Notebook Gamer ASUS ROG",
    precio: 1299990,
    valoracion: 5,
    imagen:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80"
  },
  {
    nombre: "IPHONE 14 Pro Max",
    precio: 1219990,
    valoracion: 5,
    imagen:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80"
  },
  {
    nombre: "Monitor Gamer Gear 24°",
    precio: 349990,
    valoracion: 4,
    imagen:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80"
  },
  {
    nombre: "Mouse Logitech",
    precio: 49990,
    valoracion: 5,
    imagen:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80"
  },
  {
    nombre: "Teclado Membrana Inalambrico",
    precio: 79990,
    valoracion: 4,
    imagen:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"
  },
  {
    nombre: "Audífonos Gamer HyperX",
    precio: 59990,
    valoracion: 4,
    imagen:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=80"
  },
  {
    nombre: "Refrigeracion liquida para PC",
    precio: 69990,
    valoracion: 5,
    imagen:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=700&q=80"
  },
  {
    nombre: "Cámara Web Full HD",
    precio: 45990,
    valoracion: 4,
    imagen:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=700&q=80"
  }
];

async function cargarProductos() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Producto.deleteMany({});
    await Producto.insertMany(productos);

    console.log("Productos cargados correctamente");
  } catch (error) {
    console.error("Error al cargar productos:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

cargarProductos();