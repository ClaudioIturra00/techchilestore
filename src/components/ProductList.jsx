import ProductCard from "./ProductCard";

function ProductList({ productos, agregarAlCarrito }) { // Recibe los productos filtrados y la función del carrito
  return (
    <section className="products-section" id="productos">
      <div className="section-title">
        <h2>Productos destacados</h2>
        <a href="#productos">Ver todos</a>
      </div>

      {productos.length === 0 ? (
        <p className="no-results">No se encontraron productos.</p> /* Mensaje mostrado cuando no hay resultados */
      ) : (
        <div className="products-grid">
          {productos.map((producto) => (
            <ProductCard
              key={producto._id || producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;