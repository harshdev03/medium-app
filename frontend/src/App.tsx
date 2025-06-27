import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import { ToastContainer } from 'react-toastify'
import Publish from './pages/Publish'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>  
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/publish' element={<Publish/>}/>
        </Routes>

        <ToastContainer 
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  )
}

export default App