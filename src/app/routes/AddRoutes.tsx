import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom'
import { Dashboard, Login } from '../pages'

export const AddRoutes = () => (
  <BrowserRouter>
    <Routes >
      <Route path="/login" Component= {Login} />
      <Route path="/pagina-inicial" Component= {Dashboard} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes >
  </BrowserRouter>
)
