import SearchBar from "./SearchBar";
import Cart from "./Cart";

// Recibe el buscador, carrito y función para eliminar productos del carrito como props
function Header({
  busqueda,
  setBusqueda,
  carrito,
  eliminarDelCarrito
}) {
  return (  
    <header className="header">
      <div className="header-top">
        <span>🚚 Envíos a todo Chile</span>
        <span>🔒 Compra segura</span>
        <span>🎧 Soporte 24/7</span>

        <div className="social-links">
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </div>

      <div className="header-main">
        <a href="#inicio" className="logo">
          <span className="logo-cart">🛒</span>
          Tech<span>Store</span>
        </a>

        <SearchBar
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        <div className="header-actions">
          <button type="button" className="login-button">
            Iniciar sesión
          </button>

          <button type="button" className="register-button">
            Registrarse
          </button>
        {/* Carrito de compras */}
          <Cart
            productos={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;