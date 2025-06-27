import React from 'react'
import Circle from './Circle'

const Sekelton = () => {
  return (
<div role="status" className="animate-pulse">
         <div className='border-slate-300 border-b w-screen max-w-screen-md mb-4 cursor-pointer '>
        <div className='flex'>
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className='flex flex-col pl-1 justify-center'>
            <Circle/>
          </div>
          <div className='pl-2 font-light  flex justify-center flex-col  text-slate-500'>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>

        </div>
        <div className='text-xl pt-2 flex justify-center flex-col font-semibold'>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>

        <div className='text-lg font-light'>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>

        <div className='text-slate-400 text-sm mb-2'>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>

      </div>
    </div>
  )
}

export default Sekelton
