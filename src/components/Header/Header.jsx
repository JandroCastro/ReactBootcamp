import React from "react";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import IconsList from "../IconsList/IconsList";
import "./Header.css";
function Header({ onFilterChange, showCart, showProducts }) {
  const handleFilterChange = (nuevoFiltro) => {
    onFilterChange(nuevoFiltro);
  };

  return (
    <header>
      <div className="header-container">
        <HeaderNavBar />
        <IconsList />
      </div>
    </header>
  );
}

export default Header;
