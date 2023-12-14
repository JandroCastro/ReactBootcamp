import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));

    savedCartItems ? setCartItems(savedCartItems) : null;
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  const resetCart = () => {
    // Limpia el carrito y el LocalStorage
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

//Persistir datos en localStorage del carro porque sino al renderizar de nuevo se vacía el estado de cartITems
//No se puede iniciar con los datos de LocalStorage porque no "llegan a tiempo" -> useEffect
//validación de lo descargado de LocalStorage porque sino lo cambia a null y no es iterable
