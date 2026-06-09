import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getAllPost } from '../utils/post';
import type { PostType } from '../types/type';
import { NavLink, useLoaderData} from 'react-router'

const Dashboard = () => {
  const {token,setToken,search}=useAuth();
  const [posts,setPost]=useState<PostType[]>([]);
  const [error,setError]=useState('');
  const [isLoading,setIsLoading]=useState<boolean>(true);


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
      const filteredPosts=data.filter(d=>d&&d.title).filter(d=>d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      setPost(filteredPosts);
      setIsLoading(false);
    }else{
      setPost([])
    }
    }
    
 loadPosts();
  },[token,search])




  return (
    
   <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10 transition-colors duration-300">
  
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Dashboard</h1>
      <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${token ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {token ? "Authenticated" : "Guest Mode"}
      </span>
    </div>


    {isLoading ? (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((p) => (
            <NavLink 
              to={`/posts/${p.id}`} 
              key={p.id}
              className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                {p.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                {p.body}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                <span className="text-blue-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </div>
            </NavLink>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400">
            <p className="text-xl">No posts found for your search 🔍</p>
          </div>
        )}
      </div>
    )}

   
    {error && (
      <div className="fixed bottom-6 right-6 p-4 bg-red-600 text-white rounded-xl shadow-lg">
        {error}
      </div>
    )}
  </div>
   
    
  )
}

export default Dashboard