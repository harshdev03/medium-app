import React from 'react'
import BlogCard from '@/components/blog-card'
import NavbarComp from '@/components/navbar-comp'
import { useBlogs } from '@/hooks/useBlogs'

const Blogs = () => {
  const { blogs } = useBlogs()
  return (
    <div className='flex flex-col w-full'>
        <div><NavbarComp/></div>
        <div className='h-screen pt-3 sm:pt-20 flex-col items-center flex justify-center'>
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
  )
}

export default Blogs