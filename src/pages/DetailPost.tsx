import React, { useState } from 'react'
import { Form, redirect, useLoaderData, useNavigate } from 'react-router'
import type { PostType } from '../types/type'
import { useAuth } from '../context/AuthContext';
import { deleteSpecPost } from '../utils/post';

const DetailPost = () => {
 const post=useLoaderData() as PostType;
  const[edit,setEdit]=useState(false);
  const[title,setTitle]=useState(post.title || "");
  const [body,setBody]=useState(post.body || "");
  const{token,setToken}=useAuth();
   
 
  const navigate=useNavigate();

  const deletePost= async(id:string,token:string)=>{
   
              const dec= await deleteSpecPost({id,token});

              if(dec){
                return navigate("/")
                

              }
              return navigate(`/post/${post.id}`)
            }

             
  return (
   <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 transition-colors duration-300">
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 md:p-12">
      
     
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setEdit(!edit)}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20"
        >
          {edit ? "Cancel Edit" : "Edit Post"}
        </button>
        
        <button 
          onClick={() => {
            const isConfirmed = window.confirm('Are you sure you want to delete this post?');
            if (isConfirmed) {
              deletePost(post.id, token);
            }
          }}
          className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all active:scale-95 shadow-lg shadow-red-500/20"
        >
          Delete Post
        </button>
      </div>

    
      {edit ? (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Post</h2>
          <Form method='post' className="space-y-4">
            <input type="hidden" name='id' value={post.id} />
            
            <input 
              type="text" name='title' value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            
            <textarea 
              name='body' rows={6} value={body} 
              onChange={(e) => setBody(e.target.value)}
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            
            <button 
              type='submit'
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg"
            >
              Save Changes
            </button>
          </Form>
        </div>
      ) : (
        <article className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {post.title}
          </h1>
          <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {post.body}
          </div>
        </article>
      )}
    </div>
  </div>
  )
}

export default DetailPost