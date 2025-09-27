import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { useBlogs } from '../hooks'
import Sekelton from '../components/Sekelton'

const Blogs = () => {
  const { loading, blogs } = useBlogs()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Appbar />
        <div className="pt-8 px-2 sm:px-8">
          <div className="w-full max-w-4xl mx-auto space-y-6">
            <Sekelton />
            <Sekelton />
            <Sekelton />
            <Sekelton />
            <Sekelton />
            <Sekelton />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />

      <div className="pt-32 px-2 sm:px-8 pb-12">
        <div className="w-full max-w-4xl mx-auto space-y-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author?.name || 'Unknown Author'}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
