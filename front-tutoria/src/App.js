import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import RequireAuth from './utils/RequireAuth';
// Importa otros componentes necesarios

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        {/* Define más rutas aquí, cada una con su componente respectivo */}
      </Routes>
    </Router>
  );
}

export default App;
