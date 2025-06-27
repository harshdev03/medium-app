import React , {useState ,} from 'react'
import Appbar from '../components/Appbar'
import TextEditor from '../components/TextEditor'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const Publish = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
  return (
    <div>
      <Appbar />
      <div className="flex justify-center px-4 sm:px-6 mt-28">
        <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-6">
          {/* Blog Title */}
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Blog Title
            </label>
            <input
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
              type="text"
              id="title"
              placeholder="Enter blog title"
              className="w-full p-4 text-gray-900 border border-slate-300 rounded-md bg-gray-50 text-base focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Blog Content */}
          <TextEditor onChange={(e) => {
         setContent(e.target.value)
             }} />
         <div className="pt-2">
            <button
                onClick={async () => {
        try {
            const response = await axios.post(
            `${BACKEND_URL}/api/v1/blog`,
            {
                title,
                content
            },
            {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            )
              console.log('Publish response:', response.data)
            navigate(`/blog/${response.data.blog.id}`)
        } catch (error) {
            console.error("Failed to publish blog:", error)
        }
        }}

              type="button"
              className="w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              Publish
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Publish

