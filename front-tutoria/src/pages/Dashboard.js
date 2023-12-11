import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Bienvenido, {user.username}</h1>
      {user.tipo === 'administrador' ? (
        <div>
          <p>Eres administrador y estos son tus datos:</p>
          {/* Muestra los datos del administrador aquí */}
        </div>
      ) : (
        <div>
          <p>Eres usuario y estos son tus datos:</p>
          {/* Muestra los datos del usuario aquí */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
