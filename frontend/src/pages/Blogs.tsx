
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { useBlogs } from '../hooks'
import Sekelton from '../components/Sekelton'

const Blogs = () => {
  const { loading, blogs } = useBlogs()

  if (loading) {
    return <div>
      <Appbar/>
      <div className='flex pt-30 justify-center'>
        <div>
      <Sekelton/>
      <Sekelton/>
      <Sekelton/>
      <Sekelton/>
      <Sekelton/>
      <Sekelton/>
        </div>
      </div>
    </div>
  }

  return (
    <div>
      <Appbar />
      <div className='flex pt-30 justify-center'>
        <div>
          {blogs.map((blog) => {
            console.log(blog); 

            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author?.name || "Unknown Author"} 
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb"}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blogs
