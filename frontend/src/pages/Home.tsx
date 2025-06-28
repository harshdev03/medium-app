import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Welcome to Medium
      </h1>


      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl italic">
        "Words are free. It's how you use them that may cost you." – Kipling Williams
      </p>


      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-lg text-base font-semibold transition"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate('/signin')}
          className="px-6 py-3 text-black border border-gray-900 hover:bg-gray-100 rounded-lg text-base font-semibold transition"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Home
