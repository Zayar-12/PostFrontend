
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import Dashboard from './pages/Dashboard'
import { useEffect, useState } from 'react'
import { login, logout } from './utils/auth'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/auth/Login'


const App = () => {
 
 
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
      {
         index:true,
         element:<Dashboard/>,
      },
      {
        path:"/login",
        element:<Login/>
      }
      ]
    }
  ])

  
  return (
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  )
}

export default App