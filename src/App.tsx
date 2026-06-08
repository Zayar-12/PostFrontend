
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import Dashboard from './pages/Dashboard'
import { useEffect, useState } from 'react'
import { login, logout } from './utils/auth'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/auth/Login'
import NewPost from './pages/NewPost'
import { createNewPost, editPost } from './Actions/formactions'
import DetailPost from './pages/DetailPost'
import { detailPost } from './Loaders/postloaders'


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
      },
      {
        path:"/newPost",
        element:<NewPost/>,
        action:createNewPost
      },
      {
        path:"/posts/:id",
        element:<DetailPost/>,
        loader:detailPost,
        action:editPost
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