import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { About, Home, Posts } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
