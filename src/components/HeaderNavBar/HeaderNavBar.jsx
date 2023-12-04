import React, { useState } from "react";

function HeaderNavBar({ onFilterChange }) {
  const menuOptions = ["Inicio", "Categorías", "Ofertas", "Contacto"];
  const [textoFiltro, setTextoFiltro] = useState("");

  const handleInputChange = (event) => {
    const nuevoTexto = event.target.value;
    setTextoFiltro(nuevoTexto);
    onFilterChange(nuevoTexto);
  };

  return (
    <>
      <div className="logo">MiTienda</div>
      <ul>
        {menuOptions.map((opt) => (
          <li key={opt}>{opt}</li>
        ))}
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos"
          value={textoFiltro}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default HeaderNavBar;
