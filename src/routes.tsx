import { createBrowserRouter, Navigate } from 'react-router'
import App from './App.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'
import { AppLayout } from './layouts/AppLayout.tsx'
import { Perfis } from './pages/Admin/Perfis/Perfis.tsx'
import { Login } from './pages/Login/Login.tsx'
import { Painel } from './pages/Instrutor/Painel/Painel.tsx'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/instrutor',
        handle: { perfil: 'instrutor', nome: 'Rafael Lima' },
        children: [
          { index: true, element: <Navigate to="painel" replace /> },
          { path: 'painel', element: <Painel /> },
        ],
      },
      {
        path: '/login',
        element: <Login />,
        handle: { layout: 'auth' }
      },
      {
        path: '/',
        element: <App />
      },
      {
        path: '/admin/perfis',
        element: <Perfis />
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
])
