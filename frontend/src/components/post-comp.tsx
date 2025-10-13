import { useState } from 'react'
import Navbar from './navbar'
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button'
import axios from 'axios'
import { BACKEND_URL } from '@/lib/config'
import { useNavigate } from 'react-router-dom'

const PostComp = () => {
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const navigate = useNavigate()

    async function sendPost(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content
            },{
                headers :{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log('Publish response:', response.data)
            navigate(`/blog/${response.data.blog.id}`)
        }catch(e){
              console.error("Failed to publish blog:", e)
        }
    }


  return (
    <div className="flex flex-col w-full">
      <div><Navbar /></div>

        <div className="flex h-screen px-4 sm:px-5 justify-center items-center flex-col space-y-6">
          <div className="flex flex-col w-full max-w-md">
            <Label htmlFor="title">Blog Title</Label>
            <Textarea id="title" placeholder="Type your title here." onChange={(e)=> setTitle(e.target.value) } className="mt-2 w-full"/>
          </div>

          <div className="flex flex-col mb-5 w-full max-w-md">
            <Label htmlFor="desc">Blog Description</Label>
            <Textarea id="desc" placeholder="Type your description here." onChange={(e)=> setContent(e.target.value)} className="mt-2 w-full"/>

             <div className='pt-5'>
            <Button className='cursor-pointer' onClick={sendPost}>Send Post</Button>
            </div>
          </div>

        </div>
      </div>
  )
}

export default PostComp


