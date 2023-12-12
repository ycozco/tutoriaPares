// src/utils/RequireAuth.js
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RequireAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);
  let location = useLocation();

  if (!auth) {
    // Redirige a la página de login, pero recuerda la ubicación actual
    // que el usuario intentó visitar. Después de iniciar sesión, puedes
    // redirigir al usuario a esta ubicación utilizando el estado en la ruta de navegación.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
