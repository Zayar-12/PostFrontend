import axios from "axios";
import type {  createPostType, getPostType, PostType, updatePostType } from "../types/type";

export const getAllPost= async(token:string):Promise<PostType[]>=>{

try {
   const res=await axios.get('http://127.0.0.1:8000/api/v1/posts',{
                headers:{ 'Accept': 'application/json',
                 'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,
                 
        }
        })

        if(res){
            return res.data.data;
        }

        return []
        console.log("NO data")
} catch (error) {
     return []
     console.log("Fetch fail")
}

}

export const createPost= async ({token,title,body}:createPostType):Promise<boolean>=>{

    try {
        const res= await axios.post('http://127.0.0.1:8000/api/v1/posts',{
             title:title,
             body:body
        },{
            headers:{ 'Accept': 'application/json',
                 'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,}
        })

        if(res){
            return true

            console.log("success")
        }
        return false

        console.log("no data")
    } catch (error) {
         return false
         console.log("fetch fail")
    }

}


export const getPost= async({id,token}:getPostType)=>{

    try {
        
        const res= await axios.get(`http://127.0.0.1:8000/api/v1/posts/${id}`,{
            headers:{ 'Accept': 'application/json',
                 'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,}
        })

        if(res){
           return res.data.data
        }

        return {
            'message':'no data'
        }
    } catch (error) {
         return {
            'message':'fetch fail'
         }
    } 
}



export const updatePost= async({id,title,body,token}:updatePostType):Promise<boolean>=>{

    try {
        
        const res= await axios.put(`http://127.0.0.1:8000/api/v1/posts/${id}`,
            {
                    title:title,
                    body:body,
            },{
            headers:{ 'Accept': 'application/json',
                 'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,}
        })

        if(res){
           return true;
           console.log('updated successful')
        }

        return false
         console.log("no data")
    } catch (error) {
         return false
         console.log("fetch fail")
    } 
}



export const deleteSpecPost= async({id,token}:getPostType):Promise<boolean>=>{

    try {
        
        const res= await axios.delete(`http://127.0.0.1:8000/api/v1/posts/${id}`,
            {
            headers:{ 'Accept': 'application/json',
                 'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,}
        })

        if(res){
           return true;
           console.log('updated successful')
        }

        return false
         console.log("no data")
    } catch (error) {
         return false
         console.log("fetch fail")
    } 
}