
import { redirect, type ActionFunctionArgs } from "react-router";
import { createPost, updatePost } from "../utils/post";
import { useAuth } from "../context/AuthContext";
import { registerApi } from "../utils/auth";


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


// export const register= async ({request}:ActionFunctionArgs)=>{
  
//   const formData=request.formData();
//   const name= (await formData).get("name") as string;
//   const email= (await formData).get("email") as string;
//   const password= (await formData).get("password") as string;
//   const password_confirmation =(await formData).get("password_confirmation") as string;
   

//   console.log(name,email,password,password_confirmation);

//    const dec= await registerApi({name,email,password,password_confirmation})

//    if(dec){
//     return redirect("/");
//    }

//    return redirect("/register");
   
// }