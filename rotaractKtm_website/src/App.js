import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FAQChat from './pages/FAQChat'
import { Divide } from 'lucide-react'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/events",
      element: <Events />
    },
    {
      path: "/gallery",
      element: <Gallery />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])

  return (
    <div>
    <RouterProvider router={router} />
    <FAQChat/>

    </div>
  )
}

export default App
