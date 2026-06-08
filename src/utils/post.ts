import axios from "axios";
import type { PostType } from "../types/type";

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