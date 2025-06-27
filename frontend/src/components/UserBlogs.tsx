
import Appbar from './Appbar'
import Avatar from './Avatar'

interface BlogType {
  content: string
  title: string
  id: number
  author: {
    name: string
  }
}

const UserBlogs = ({ blog }: { blog: BlogType }) => {
  return (
    <div>
      <Appbar />

      <div className="flex justify-center px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full pt-32 max-w-screen-xl gap-8">
          {/* Blog Content */}
          <div className="md:col-span-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold break-words">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-3 text-sm sm:text-base">Posted on 2nd Dec</div>
            <div className="text-base sm:text-lg text-slate-700 font-medium pt-4 break-words">
              {blog.content}
            </div>
          </div>

          {/* Author Info */}
          <div className="md:col-span-4">
            <div className="text-slate-700 text-base sm:text-lg font-semibold">Author</div>
            <div className="flex pt-3 flex-col gap-2">
              <Avatar name={blog.author.name} />
              <div className="font-bold text-2xl sm:text-3xl lg:text-4xl">{blog.author.name}</div>
              <div className="text-sm sm:text-base text-slate-700 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptas ipsam accusantium
                tempore officia maxime modi, voluptatibus nam quod nesciunt!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBlogs
