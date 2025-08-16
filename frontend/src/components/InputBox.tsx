import { type ChangeEventHandler } from 'react'

interface LabelTypes {
    label: string,
    placeholder: string,
    type: string,
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    autoComplete?: string;
}

const InputBox = ({ label, placeholder, onChange, type, autoComplete }: LabelTypes) => {
  return (
    <div>
      <div className='pt-1'>
        <label className="block mb-2 text-xl font-medium text-gray-900">{label}</label>
        <input 
          type={type || "text"} 
          onChange={onChange} 
          autoComplete={autoComplete} 
          id="first_name" 
          className="bg-gray-50 pt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder={placeholder} 
          required 
        />
      </div>
    </div>
  )
}

export default InputBox