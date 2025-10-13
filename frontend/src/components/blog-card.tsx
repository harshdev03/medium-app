
import { Dot, User } from 'lucide-react'
import { Link } from 'react-router-dom'


interface BlogsCardType{
    id : number
    authorName : string,
    title :string
    content : string
    publishedDate : string
}


const BlogCard = ({id , authorName,title , content , publishedDate}: BlogsCardType) => {

  const formatDate = new Date(publishedDate).toLocaleDateString("en-IN", {
    day : "numeric",
    month : "short",
    year : "numeric"
  })

  return (
    <div>
    <Link className='pt-10' to={`/blog/${id}`}>
    <div className='px-4 sm:px-3 border-b-amber-100 border-b  w-screen max-w-screen-md mb-4 cursor-pointer '>
        <div className='flex'>  
          <User className='h-6 w-6'/>
          <div className='font-light flex justify-center flex-col'>
          {authorName} 
          </div>  
          <div className='flex flex-col justify-center'>
            <Dot className='h-8 w-8'/>
          </div>
          <div className='font-light  flex justify-center flex-col'>
          {formatDate} 
          </div>

        </div>
        <div className='text-xl pt-2 flex justify-center flex-col font-light'>
            {title}
        </div>

        <div className='text-lg font-light'>
        {content?.length >= 100 ? content.slice(0 , 100) + "..." : content}
        </div>

        <div className='text-sm mb-2'>
            {`${Math.ceil(content.length / 100)} minute(s) read `}
        </div>
    </div>
    </Link>
    </div>
  )
}

export default BlogCard