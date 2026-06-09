export interface Auth{
    name?:string,
     email:string,
     password:string,
     password_confirmation?:string,
}

export interface ContextType{
    token:string,
    setToken:(token:string)=>void,
    search:string,
    setSearch:(value:string)=>void,
}

export interface PostType{
    id:string,
    title:string,
    body:string,
    author:{
        name:string,
        email:string,
        
    }
}

export interface createPostType{
    title:string,
    body:string,
    token:string
}


export interface getPostType{
    id:string,
    token:string,
}


export interface updatePostType{
    id:string,
    title:string,
    body:string,
    token:string
}
