import { lazy, Suspense } from 'react';
import { BrowserRouter as  Main,Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));


function App() {
  return(

    <Routes>
      <Route index element={<Home />}></Route>
      <Route exact path='/' element={<Home />}></Route>
    </Routes>

  )
}

export default App;
