import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.tsx';
import Register from './routes/Register.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
  },
  {
    path: '/login',
    element: <Login />
  },  
  {
    path: "/register",
    element: <Register />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
