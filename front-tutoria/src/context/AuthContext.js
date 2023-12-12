// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = (token, user) => {
    // Almacena el token en el almacenamiento local o cookies aquí
    setAuth({ token, user });
  };

  const logout = () => {
    // Elimina el token del almacenamiento aquí
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
