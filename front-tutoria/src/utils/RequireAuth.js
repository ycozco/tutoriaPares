import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  let location = useLocation();

  if (!user) {
    // Redirigir al usuario a la página de inicio de sesión, pero guarda la ubicación actual a la que intentaban acceder.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // Si el usuario está autenticado, renderiza el componente children.
};

export default RequireAuth;
