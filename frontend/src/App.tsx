import Home from "./components/home"
import Provider from "./lib/provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import Blogs from "./pages/blogs"
import Publish from "./pages/publish"
import Blog from "./pages/blog"

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
