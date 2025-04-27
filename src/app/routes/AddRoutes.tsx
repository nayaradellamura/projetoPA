import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';

export const AddRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pagina-inicial" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* Rota de fallback para redirecionar para a página inicial */}
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  </BrowserRouter>
);
