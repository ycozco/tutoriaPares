// LogoutButton.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Cambia UserContext por AuthContext
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const LogoutButton = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  const { setAuth } = useContext(AuthContext); // Cambia setUser por setAuth

  const handleLogout = () => {
    setAuth(null); // Actualiza el estado de autenticación
    localStorage.removeItem('user'); // Limpia el almacenamiento local
    navigate('/login'); // Redirige a la página de inicio de sesión
  };

  return <button onClick={handleLogout}>Cerrar Sesión</button>;
};

export default LogoutButton;
