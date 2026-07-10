import { useState } from "react";

// Recibe los productos agregados y la función para eliminarlos
function Cart({ productos = [], eliminarDelCarrito }) {
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const total = productos.reduce(
    (acumulador, producto) =>
      acumulador + Number(producto.precio),
    0
  );

  return (
    <div className="cart-container">
      {/* Botón que abre y cierra el carrito */}
      <button
        type="button"
        className="cart-button"
        onClick={() => setCarritoAbierto((estado) => !estado)}
      >
        🛒 Carrito ({productos.length})
      </button>

      {carritoAbierto && (
        <div className="cart-panel">
          <div className="cart-panel-header">
            <h3>Mi carrito</h3>

            <button
              type="button"
              className="close-cart"
              onClick={() => setCarritoAbierto(false)}
            >
              ✕
            </button>
          </div>

          {productos.length === 0 ? (
            <p className="empty-cart">
              Tu carrito está vacío.
            </p>
          ) : (
            <>
              <div className="cart-products">
                {productos.map((producto, indice) => (
                  <article
                    className="cart-product"
                    key={`${producto._id || producto.id}-${indice}`}
                  >
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                    />

                    <div>
                      <h4>{producto.nombre}</h4>
                      <p>
                        $
                        {Number(producto.precio).toLocaleString(
                          "es-CL"
                        )}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="remove-product"
                      onClick={() =>
                        eliminarDelCarrito(indice)
                      }
                    >
                      ✕
                    </button>
                  </article>
                ))}
              </div>

              <div className="cart-total">
                <span>Total:</span>
                <strong>
                  ${total.toLocaleString("es-CL")}
                </strong>
              </div>

              <button
                type="button"
                className="checkout-button"
              >
                Finalizar compra
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;