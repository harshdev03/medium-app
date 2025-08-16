
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <div className='fixed top-0 backdrop-blur-lg bg-white/10 w-full z-50'>
      <div className='border-b border-slate-200 flex justify-between items-center px-4 md:px-8 lg:px-20 bg-white/20 py-2'>
        
        <div className='font-semibold text-base md:text-lg'>
          <Link to={'/blogs'}>
            Medium
          </Link>
        </div>

      
        <div className='flex items-center gap-2 sm:gap-4'>
          <Link to={'/publish'}>
              <button
                type="button"
                className="text-white text-sm md:text-base bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg px-3 py-1.5 sm:px-4 sm:py-2"
                >
                Add New
              </button>
            </Link>
          <Avatar name={'Harsh'} />
        </div>

      </div>
    </div>
  )
}

export default Appbar
