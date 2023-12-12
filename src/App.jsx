import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import LoginForm from "./components/LoginForm/LoginForm";
import CartSection from "./components/CartSection/CartSection";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [filtro, setFiltro] = useState("");
  const { darkMode } = useTheme();
  const [showCartSection, setShowCartSection] = useState(false);

  const handleShowCart = () => {
    setShowCartSection(true);
  };

  const handleShowProducts = () => {
    setShowCartSection(false);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header
        onFilterChange={setFiltro}
        showCart={handleShowCart}
        showProducts={handleShowProducts}
      />
      <Banner />
      {showCartSection ? <CartSection /> : <ProductsSection filtro={filtro} />}
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
