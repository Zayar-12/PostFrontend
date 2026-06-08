
import { redirect, type ActionFunctionArgs } from "react-router";
import { createPost, updatePost } from "../utils/post";
import { useAuth } from "../context/AuthContext";


export const createNewPost= async({request}:ActionFunctionArgs)=>{
    
const formData= request.formData();
const title=(await formData).get("title") as string;
const token=localStorage.getItem('token') as string;
const body= (await formData).get('body') as string;

console.log(title,body,token);
const dec= await createPost({token,title,body});

if(!dec){
return redirect("/newPost");
}

return redirect("/");


    
    
}

export const editPost= async ({request}:ActionFunctionArgs)=>{
  const formData= request.formData();
const title=(await formData).get("title") as string;
const id=(await formData).get("id") as string;
const token=localStorage.getItem('token') as string;
const body= (await formData).get('body') as string;

console.log(title,id,token,body);
const dec= await updatePost({id,title,body,token});


if(dec){
return redirect("/");
}
redirect(`/posts/${id}`);
}