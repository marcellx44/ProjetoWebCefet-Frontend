import { createBrowserRouter } from 'react-router'
import App from './App.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'
import { AppLayout } from './layouts/AppLayout.tsx'
import { Perfis } from './pages/Admin/Perfis/Perfis.tsx'
import { Login } from './pages/Login/Login.tsx'
import { TesteExclusaoCurso } from './pages/TesteExclusaoCurso/TesteExclusaoCurso.tsx'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
      {
        path: '/teste-exclusao-curso',
        element: <TesteExclusaoCurso />
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
])
