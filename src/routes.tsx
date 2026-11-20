import { createBrowserRouter } from 'react-router'
import Inicio from './pages/aluno/Inicio.tsx'
import Catalogo from './pages/aluno/Catalogo.tsx'
import App from './App.tsx'

export const router = createBrowserRouter([
  {
    path: '/aluno/inicio',
    element: <Inicio />,
  },

  {
    path: '/aluno/catalogo',
    element: <Catalogo />,
  },

  {
    path: '/',
    element: <App />,
  },

])
