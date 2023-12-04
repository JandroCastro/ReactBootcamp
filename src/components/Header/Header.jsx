import React from "react";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import IconsList from "../IconsList/IconsList";
import "./Header.css";
function Header({ onFilterChange }) {
  const handleFilterChange = (nuevoFiltro) => {
    onFilterChange(nuevoFiltro);
  };

  return (
    <header>
      <div className="header-container">
        <HeaderNavBar onFilterChange={handleFilterChange} />
        <IconsList />
      </div>
    </header>
  );
}

export default Header;
