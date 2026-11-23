import { createBrowserRouter } from 'react-router'
import App from './App.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'
import { AppLayout } from './layouts/AppLayout.tsx'
import { Perfis } from './pages/Admin/Perfis/Perfis.tsx'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
