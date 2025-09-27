import axios from "axios"
import { useEffect, useState } from "react"
import { errorBlogs, sucessBlogs } from "../types/use-toast"
import { BACKEND_URL } from "../config"


interface BlogsType {
    "content" : string,
    "title" : string,
    "id" : number,
    "publishedDate" :string,
    "author":{
        "name" : string
    } 
}

interface BlogType {
    "content" : string,
    "title" : string,
    "id" : number,
    "publishedDate" :string,
    "author":{
        "name" : string
    } 
}

export const useBlogs = ()=>{
    const [loading , setLoading] = useState(true)
    const [blogs , setBlogs] = useState<BlogsType[]>([])

   async function fetchBlogs(){
    try{
        const url = `${BACKEND_URL}/api/v1/blog/bulk`
        const response = await axios.get(url , {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })

        setBlogs(response.data.blogs)
        sucessBlogs()
        setLoading(false)
        
    }catch(e){
        setLoading(false)
        errorBlogs()
    }

   }

    useEffect(()=>{
        fetchBlogs()
    },[])

    return {
        loading,
        blogs
    }
}

export const useBlog = ({id} : {id : string})=>{
    const [loading , setLoading] = useState(true)
    const [blog , setBlog] = useState<BlogType>()

   async function fetchBlog(){
    try{
        const url = `${BACKEND_URL}/api/v1/blog/${id}`
        const response = await axios.get(url , {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })

        setBlog(response.data.blog)
        setLoading(false)
        
    }catch(e){
        setLoading(false)
        errorBlogs()
    }

   }

    useEffect(()=>{
        fetchBlog()
    },[id])

    return {
        loading,
        blog
    }
}