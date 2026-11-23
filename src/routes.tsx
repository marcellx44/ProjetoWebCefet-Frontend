import { createBrowserRouter } from 'react-router'
import App from './App.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'
import { AppLayout } from './layouts/AppLayout.tsx'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
])
