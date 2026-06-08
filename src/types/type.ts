export interface Auth{
    name?:string,
     email:string,
     password:string,
     password_confirmation?:string,
}

export interface ContextType{
    token:string,
    setToken:(token:string)=>void,
}

export interface PostType{
    title:string,
    body:string
}