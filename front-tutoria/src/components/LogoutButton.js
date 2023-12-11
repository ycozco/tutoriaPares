import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const LogoutButton = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    // Limpiar el estado y el almacenamiento local
    setUser(null);
    localStorage.removeItem('user');
    // Redirigir a la página de inicio de sesión
  };

  return <button onClick={handleLogout}>Cerrar Sesión</button>;
};

export default LogoutButton;
