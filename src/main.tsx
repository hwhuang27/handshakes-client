import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './routes/Index.tsx';
import App from './routes/App.tsx';
import Profile from './routes/Profile.tsx';
import Login from './routes/Login.tsx';
import Register from './routes/Register.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  },  
  {
    path: "/register",
    element: <Register />
  },
  {
    path: '/chat/',
    element: <App />
  }, 
  {
    path: '/profile',
    element: <Profile />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
