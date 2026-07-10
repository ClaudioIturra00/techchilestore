function Footer() {
  // Obtiene automáticamente el año actual
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="footer-content">
        {/* Información general de la tienda */}
        <section className="footer-section" id="nosotros">
          <h2>
            Tech<span>Store</span>
          </h2>

          <p>
            Tu tienda de tecnología con productos de calidad,
            buenos precios y despachos a todo Chile.
          </p>
        </section>

        <section className="footer-section">
          <h3>Contacto</h3>
          <p>📍 Av 21 de mayo, Los Angeles</p>
          <p>📧 contacto@techstore.cl</p>
          <p>📞 +56 9 9887 8872</p>
        </section>

        <section className="footer-section">
          <h3>Enlaces</h3>
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#nosotros">Nosotros</a>
        </section>

        <section className="footer-section">
          <h3>Redes sociales</h3>
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
        </section>
      </div>

      <div className="footer-bottom">
        <p>
          © {anioActual} TechStore Chile. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;