
import { createContext, useContext, useState } from "react";
import type { ContextType } from "../types/type";



const AuthContext=createContext<ContextType | undefined>(undefined);


 export const AuthProvider=({children}:{children:React.ReactNode})=>{

    const[token,setToken]=useState<string>(localStorage.getItem('token') || "");
    const [search,setSearch]=useState<string>("");
    return (
       <AuthContext.Provider value={{ token, setToken,search ,setSearch }}>
      {children}
    </AuthContext.Provider>
    )
 }

 export const useAuth=()=>{
   const context = useContext(AuthContext);
  
 
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
 }