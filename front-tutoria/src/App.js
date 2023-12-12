import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './utils/RequireAuth';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import Dashboard from './pages/Dashboard'; // Asumiendo que también tienes un componente Dashboard

// Aquí puedes importar otros componentes como Headers, Footers, etc.

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* Aquí podrías colocar componentes que se muestren en todas las páginas, como un Header o Navbar */}
          
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route 
              path="/profile" 
              element={
                <RequireAuth>
                  <UserProfilePage />
                </RequireAuth>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              } 
            />
            {/* Puedes definir más rutas protegidas o públicas aquí */}
          </Routes>
          
          {/* Y aquí podrías colocar componentes que se muestren en todas las páginas, como un Footer */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
