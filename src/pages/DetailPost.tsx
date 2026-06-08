import React, { useState } from 'react'
import { Form, redirect, useLoaderData, useNavigate } from 'react-router'
import type { PostType } from '../types/type'
import { useAuth } from '../context/AuthContext';
import { deleteSpecPost } from '../utils/post';

const DetailPost = () => {

  const[edit,setEdit]=useState(false);
  const[title,setTitle]=useState("");
  const [body,setBody]=useState("");
  const{token,setToken}=useAuth();
   
  const post=useLoaderData() as PostType;
  const navigate=useNavigate();

  const deletePost= async(id:string,token:string)=>{
   
              const dec= await deleteSpecPost({id,token});

              if(dec){
                return navigate("/")
                

              }
              return navigate(`/post/${post.id}`)
            }

             
  return (
    <div>
      
     <button onClick={()=>{setEdit(!edit)}}> Edit</button>
      <button onClick={()=>{deletePost(post.id,token)}}> Delete</button>

     {
      edit ? <div>
         <Form method='post'>
            <input type="text" name='id' value={post.id}/><br />
        <input type="text" name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br />
        
        <textarea  name='body' rows={6} value={body} onChange={(e)=>{setBody(e.target.value)}} /><br />
        <button type='submit'>Save</button>
      </Form>
      </div>:<div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
     }
    </div>
  )
}

export default DetailPost