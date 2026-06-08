import React, { useState } from 'react'
import { login } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const {setToken,token}=useAuth();

    const navigate=useNavigate();

    const handleSubmit= async(e: React.FormEvent)=>{

        e.preventDefault();
setLoading(true);

try {
    const success= await login({
        email,password
    });

    if(success){
        const newToken=localStorage.getItem('token');
        setToken(newToken || "");
     navigate("/");
    }else{
       setError('Invalid credentials');
    }
} catch (error) {
    setError('An error occurred. Please try again.');
}finally{
    setLoading(false);
}

    }
  return (
   <div>
    <h1>Login</h1>
     <h1>{error&& error}</h1>
    <form onSubmit={handleSubmit}>
        
        <input type="email"  name='email' required onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'/><br />
        <input type="password"  name='password' required onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/><br />
        <button type='submit'  disabled={loading}>{loading ? "Loading...":"Login"}</button>
    </form>
   </div>
  )
}

export default Login