function Toast({ mensaje, visible }) {
    // No muestra nada cuando el mensaje no está activo
  if (!visible) return null;

  return (
    /* Mensaje de confirmación al agregar al carrito */
    <div className="toast">
      <span>✓</span>
      <p>{mensaje}</p>
    </div>
  );
}

export default Toast;