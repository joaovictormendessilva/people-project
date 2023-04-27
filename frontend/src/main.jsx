import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Home } from './pages/home/Home.jsx';
import { Register } from './pages/register/Register.jsx'
import { Edit } from './pages/edit/Edit.jsx';
import { ErrorPage } from './pages/404/404.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'edit/:id',
        element: <Edit />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
