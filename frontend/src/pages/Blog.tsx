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
      <div>
        <Appbar />
        <div className='h-screen flex justify-center items-center flex-col'>
          <div className='flex justify-center'>
            <Spinner />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {blog ? <UserBlogs blog={blog} /> : <div>Blog not found</div>}
    </div>
  )
}

export default Blog