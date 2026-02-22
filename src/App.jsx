import { Routes, Route } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Process from './pages/Process'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import BlogArticle from './pages/BlogArticle'
import WorkArticle from './pages/WorkArticle'

export default function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkArticle />} />
        <Route path="/process" element={<Process />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </RootLayout>
  )
}
