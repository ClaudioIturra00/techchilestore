import { useEffect, useState } from "react";

// Importación de componentes
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

function App() {
  // Guarda los productos obtenidos desde MongoDB
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [mensajeToast, setMensajeToast] = useState("");

  // Obtiene los productos desde el backend al cargar la página
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:5000/api/productos"
        );

        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos");
        }

        const datos = await respuesta.json();

        // Guarda los productos recibidos
        setProductos(datos);
      } catch {
        setError(
          "No se pudo conectar con el servidor. Revisa que el backend esté iniciado."
        );
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  // Agrega un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => [
      ...carritoActual,
      producto
    ]);

    setMensajeToast(
      `${producto.nombre} fue agregado al carrito`
    );

    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 2500);
  };

  // Elimina un producto según su posición en el carrito
  const eliminarDelCarrito = (indiceProducto) => {
    setCarrito((carritoActual) =>
      carritoActual.filter(
        (_, indice) => indice !== indiceProducto
      )
    );
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  if (cargando) {
    return (
      <p className="estado-mensaje">
        Cargando productos...
      </p>
    );
  }

  // Mensaje mostrado cuando falla el backend
  if (error) {
    return (
      <p className="estado-mensaje error-mensaje">
        {error}
      </p>
    );
  }

  return (
    <>
      <Header
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
      <Navbar />
      <Banner />

      <main className="main-container">
        <div className="store-layout">
          {/* Lista de productos obtenidos desde MongoDB */}
          <ProductList
            productos={productosFiltrados}
            agregarAlCarrito={agregarAlCarrito}
          />
          <Sidebar />
        </div>
      </main>

      <section className="bottom-benefits">
        <div className="bottom-benefits-content">
          <div>
            <span>💳</span>
            <p>Hasta 12 cuotas</p>
          </div>

          <div>
            <span>🚚</span>
            <p>Despachos a todo Chile</p>
          </div>

          <div>
            <span>🔄</span>
            <p>Cambios y devoluciones</p>
          </div>

          <div>
            <span>⭐</span>
            <p>Calidad garantizada</p>
          </div>
        </div>
      </section>

      {/* Información de contacto*/}
      <Footer />

      {/* Mensaje que aparece al agregar un producto */}
      <Toast
        mensaje={mensajeToast}
        visible={toastVisible}
      />
    </>
  );
}

export default App;