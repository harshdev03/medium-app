import { Button } from './ui/button'
import { ArrowRightIcon, CornerUpLeft, User } from 'lucide-react'
import { AvatarFallback , Avatar } from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='fixed z-20 pt-5 px-2 border-neutral-600 backdrop-blur-2xl items-center w-full'>
      <div className='mx-auto items-center flex justify-between max-w-7xl w-full'>
         <div className='flex justify-start gap-2 cursor-pointer' onClick={()=> navigate('/blogs')}>
        <CornerUpLeft className='w-5 h-5'/>
        <div>back</div>
    </div>

        <div className='flex items-center gap-4'>
          <div>
             <Button onClick={()=> navigate("/publish")} className="group cursor-pointer text-sm" variant="ghost">
              Add Post
      <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
    </Button>
          </div>
          <div>
            <Avatar>
              <AvatarFallback><User/></AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar