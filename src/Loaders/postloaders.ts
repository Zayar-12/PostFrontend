import { redirect, type LoaderFunctionArgs } from "react-router";
import { getPost } from "../utils/post";

export const detailPost= async({params}:LoaderFunctionArgs)=>{


    const id =params.id;
    const token=localStorage.getItem('token') ;

    if(!id || !token){
        return redirect("/");
    }

   
  const post= await getPost({id,token})

  return post

    console.log(`post id = ${id}`)
}