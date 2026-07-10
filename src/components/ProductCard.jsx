function ProductCard({ producto, agregarAlCarrito }) {
  const manejarAgregar = () => {
    console.log("Producto agregado:", producto);
    agregarAlCarrito(producto);
  };

  return (
    <article className="product-card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="product-image"
      />

      <h3>{producto.nombre}</h3>

      <div className="rating">
        {"★".repeat(producto.valoracion)}
        {"☆".repeat(5 - producto.valoracion)}
      </div>

      <p className="product-price">
        ${Number(producto.precio).toLocaleString("es-CL")}
      </p>

      <button
        type="button"
        className="add-button"
        onClick={manejarAgregar}
      >
        Agregar al carrito
      </button>
    </article>
  );
}

export default ProductCard;