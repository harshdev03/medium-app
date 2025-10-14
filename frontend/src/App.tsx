import Home from "@/components/home"
import Provider from "@/lib/provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "@/pages/Signup"
import Signin from "@/pages/Signin"
import Blogs from "@/pages/Blogs"
import Publish from "@/pages/Publish"
import Blog from "@/pages/Blog"


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog/:id" element={<Blog/>} />
          <Route path="/publish" element={<Publish/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App