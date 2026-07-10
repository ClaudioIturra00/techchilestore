// Recibe el texto buscado y la función para actualizarlo
function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
        aria-label="Buscar productos"
      />
    </div>
  );
}

export default SearchBar;