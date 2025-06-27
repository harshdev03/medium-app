import React from 'react'
import Avatar from './Avatar'
import Circle from './Circle'
import { Link } from 'react-router-dom'


interface BlogsCardType{
    id : number
    authorName : string,
    title :string
    content : string
    publishedDate : string
}


const BlogCard = ({id , authorName,title , content , publishedDate}: BlogsCardType) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className='border-slate-300 border-b w-screen max-w-screen-md mb-4 cursor-pointer '>
        <div className='flex'>
          <Avatar name={authorName}/> 
          <div className='pl-2 font-light flex justify-center flex-col'>
          {authorName} 
          </div>  
          <div className='flex flex-col pl-1 justify-center'>
            <Circle/>
          </div>
          <div className='pl-2 font-light  flex justify-center flex-col  text-slate-500'>
          {publishedDate} 
          </div>

        </div>
        <div className='text-xl pt-2 flex justify-center flex-col font-semibold'>
            {title}
        </div>

        <div className='text-lg font-light'>
        {content?.length >= 100 ? content.slice(0 , 100) + "..." : content}
        </div>

        <div className='text-slate-400 text-sm mb-2'>
            {`${Math.ceil(content.length / 100)} minute(s) read `}
        </div>
    </div>
    </Link>
  )
}

export default BlogCard