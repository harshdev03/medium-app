import React, { type ChangeEventHandler } from 'react'

interface TextType {
    onChange :  ChangeEventHandler<HTMLTextAreaElement>
}

const TextEditor = ({onChange}: TextType) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">Blog Content</label>
      <textarea
        onChange={onChange}
        rows={12}
        className="block w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-1 focus:ring-gray-500 focus:outline-none border-gray-300  resize-y"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  )
}

export default TextEditor
