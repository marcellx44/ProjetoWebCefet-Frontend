import { createBrowserRouter } from 'react-router'
import Inicio from './pages/aluno/Inicio.tsx'
import App from './App.tsx'

export const router = createBrowserRouter([
    {
    path: '/aluno/inicio',
    element: <Inicio />,
  },
  {
    path: '/',
    element: <App />,
  },

])
