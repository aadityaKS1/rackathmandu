import { lazy, Suspense } from 'react';
import { BrowserRouter as  Main,Route, Routes } from 'react-router-dom';
import About from './pages/About';

const Home = lazy(() => import('./pages/Home'));


function App() {
  return(

    <Routes>
      <Route index element={<Home />}></Route>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>

  )
}

export default App;
