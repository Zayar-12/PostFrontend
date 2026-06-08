import React, { useEffect, useState } from 'react'
import { Outlet ,NavLink} from 'react-router'
import { useAuth } from '../context/AuthContext'
import { logout } from '../utils/auth';


const Layout = () => {
  const{token,setToken}=useAuth();
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
    <div>
      {error && <p>{error}</p>}
      <nav>
           <NavLink to={"/"} className={({isActive})=>isActive?"font-bold ":""}>Home</NavLink>
          {
            token?<button onClick={handleLogout}>logout</button>: <NavLink to={"/login"} className={({isActive})=>isActive?"font-bold ":""}>login</NavLink>  
          }

          {
            token&& <NavLink to={"/newPost"} className={({isActive})=>isActive?"font-bold ":""}>New Post</NavLink>
          }


      </nav>
          
      <Outlet/>
    </div>
  )
}

export default Layout