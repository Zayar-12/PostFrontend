import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getAllPost } from '../utils/post';
import type { PostType } from '../types/type';
import { NavLink} from 'react-router'

const Dashboard = () => {
  const {token,setToken}=useAuth();
  const [posts,setPost]=useState<PostType[]>([]);
  const [error,setError]=useState('');


  const fetchAllPosts=async ()=>{
     
    const allPosts= await getAllPost(token);
   if(!allPosts){
    setError("Error");
   }
    return allPosts;
  }

  useEffect(()=>{
    const loadPosts= async()=>{
if(token){
      const data= await fetchAllPosts();
      setPost(data);
    }else{
      setPost([])
    }
    }
    
 loadPosts();
  },[token])
  return (
    
   <div>Dashboard
    {token ? "no auth" : "auth"}

    <div>
      {  posts && 
      posts.map(p=>(
       <NavLink to={`/posts/${p.id}`}>
         <p key={p.id}>{p.title}</p>
        <p>{p.body}</p>
        <hr />
       </NavLink>
      ))
      }
    </div>
   </div>
   
    
  )
}

export default Dashboard