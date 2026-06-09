import React, { useEffect, useState } from 'react'
import { Outlet ,NavLink} from 'react-router'
import { useAuth } from '../context/AuthContext'
import { logout } from '../utils/auth';


const Layout = () => {
  const{token,setToken,search,setSearch}=useAuth();
  const[error,setError]=useState("");
  

  
  const handleLogout=async()=>{
    const success=await logout(token);
    if(success){
      localStorage.removeItem('token');
      setToken("");
    }else{
        setError("Logout Fail")
    }

  }

 
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        
       
        <NavLink to={"/"} className={({isActive}) => 
          `text-lg font-bold transition-all ${isActive ? "text-blue-600 underline underline-offset-8" : "text-gray-600 dark:text-gray-300 hover:text-blue-500"}`
        }>
          Home
        </NavLink>

        
        <div className="flex items-center gap-6">
          {token && (
            <input 
              type="text" 
              placeholder="🔍 Search posts..."
              className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-48 md:w-64"
              onChange={(e) => setSearch(e.target.value)} 
            />
          )}

          {token && (
            <NavLink to={"/newPost"} className={({isActive}) => 
              `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}`
            }>
              New Post
            </NavLink>
          )}

          {token ? (
            <button 
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md transition-transform active:scale-95"
            >
              Logout
            </button>
          ) : (
            <NavLink to={"/login"} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all">
              Login
            </NavLink>
          )}
        </div>
      </nav>

    
      <main className="container mx-auto px-4 py-8">
        {error && (
          <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        <Outlet />
      </main>
    </div>
  )
}

export default Layout