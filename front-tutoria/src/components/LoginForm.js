// src/components/LoginForm.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'; // Cambia UserContext por AuthContext

import { useNavigate } from 'react-router-dom'; // Importa useNavigate


const LoginForm = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  const { login } = useContext(AuthContext); // Utiliza el método login de tu AuthContext
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', credentials);
      login(response.data.user, response.data.token); // Guarda los datos del usuario y el token
      navigate('/profile'); // Redirige al perfil del usuario
    } catch (error) {
      console.error('Error de inicio de sesión', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Nombre de usuario"
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Contraseña"
        required
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
