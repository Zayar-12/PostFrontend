import axios from "axios"
import type { Auth } from "../types/type";
import { useAuth } from "../context/AuthContext";


export const login= async({email,password}:Auth):Promise<boolean>=>{
  

  try {

  
      const res= await axios.post('http://127.0.0.1:8000/api/login',{
        email:email,
        password:password
    },{
        headers:{ 'Accept': 'application/json',
                 'Content-Type':'application/json'
        }

    })
         const token=res.data.token;
         localStorage.setItem('token',token);
      
         console.log("login successful")

         return true;
    
  } catch (error) {
      console.log('login fail');

      return false;
  }


}


export const logout= async (token:string):Promise<boolean>=>{

    try {
        const res=await axios.post('http://127.0.0.1:8000/api/logout',{},{
                headers:{ 'Accept': 'application/json',
                 'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,
                 
        }
        })
          
        if(res){
           return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}