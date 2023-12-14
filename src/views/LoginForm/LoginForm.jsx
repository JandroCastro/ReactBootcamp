import React from "react";
import "./LoginForm.css";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const LoginForm = () => {
  const { isLoggedIn, handleLogin, handleLogout, userData } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value;
    const email = form.email.value;

    if (nombre && email) {
      handleLogin({ name: nombre, email });
      navigate(location.state.pathname);
      form.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const onClickLogout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        {!isLoggedIn && <button type="submit">Login</button>}
      </form>
      {isLoggedIn && (
        <div className="user-info">
          <button onClick={onClickLogout} type="button">
            Logout
          </button>
          <p>¿Quieres cerrar sesión, {userData.name}?</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;

//OnClick Logout para gestionar tanto la acción de logout del hook como la navegación
//location para extraer de donde venimos
