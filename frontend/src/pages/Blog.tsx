import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom'
import UserBlogs from '../components/UserBlogs'
import Spinner from '../components/Spinner'
import Appbar from '../components/Appbar'

const Blog = () => {
  const { id } = useParams()
  const { loading, blog } = useBlog({
    id: id || ""
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Appbar />
        <div className="flex justify-center items-center h-[80vh]">
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
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
