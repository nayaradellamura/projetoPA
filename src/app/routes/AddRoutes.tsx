import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

export const AddRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pagina-inicial" element={<Dashboard />} />
      
      {/* Rota de fallback para redirecionar para a página inicial */}
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  </BrowserRouter>
);
