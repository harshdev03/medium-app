import { useParams } from 'react-router-dom'
import UserBlogs from '@/components/user-blogs'
import { useBlog } from '@/hooks/useBlogs'
import Navbar from '@/components/navbar'

const Blog = () => {
  const { id } = useParams()
  const { blog } = useBlog({
    id: id || ""
  })


  return (
    <div className="min-h-screen">
        <Navbar/>
      <div className="pt-8 px-2 sm:px-8 pb-12">
        <div className="w-full max-w-3xl mx-auto">
          {blog ? (
            <UserBlogs blog={blog} />
          ) : (
            <div className="text-center text-gray-600">Blog not found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog