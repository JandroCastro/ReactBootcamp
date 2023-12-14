import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { CartProvider } from "./context/CartContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { FiltroProvider } from "./context/FilterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <FiltroProvider>
            <RouterProvider router={router}></RouterProvider>
          </FiltroProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
