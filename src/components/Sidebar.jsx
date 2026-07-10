function Sidebar() {
  // Lista de beneficios mostrados al costado
  const beneficios = [
    {
      icono: "🚚",
      titulo: "Envíos rápidos",
      descripcion: "Despachos a todo Chile."
    },
    {
      icono: "🔒",
      titulo: "Pago seguro",
      descripcion: "Tus compras están protegidas."
    },
    {
      icono: "🛡️",
      titulo: "Garantía",
      descripcion: "Productos con garantía oficial."
    },
    {
      icono: "🎧",
      titulo: "Soporte",
      descripcion: "Atención para resolver tus dudas."
    }
  ];

  return (
    <aside className="sidebar">
      <h2>Beneficios TechStore</h2>

      <div className="benefits-list">
        {beneficios.map((beneficio) => (
          <article
            className="benefit-card"
            key={beneficio.titulo}
          >
            <span className="benefit-icon">
              {beneficio.icono}
            </span>

            <div>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;