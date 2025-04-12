import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom'
import { Dashboard } from '../pages'

export const AddRoutes = () => (
  <BrowserRouter>
    <Routes >
      <Route path="/pagina-inicial" Component= {Dashboard} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes >
  </BrowserRouter>
)
