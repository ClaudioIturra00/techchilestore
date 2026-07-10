{/* Banner principal con título y botón de ofertas */}
function Banner() {
  return (
    <section className="banner" id="inicio">
      <div className="banner-overlay">
        <div className="banner-content">
          <p className="banner-label">Tecnología para todos</p>

          <h1>
            La tecnología que lleva tu mundo al siguiente nivel
          </h1>

          <p>
            Descubre productos tecnológicos con buenos precios,
            calidad y ofertas especiales.
          </p>

          <a href="#productos" className="banner-button">
            Ver ofertas
          </a>
        </div>

        <div className="banner-decoration">
          <span>💻</span>
          <span>🎧</span>
          <span>⌨️</span>
          <span>🖥️</span>
        </div>
      </div>
    </section>
  );
}

export default Banner;