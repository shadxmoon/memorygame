
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage/MainPage.jsx'
import GamePage from './GamePage/GamePage.jsx'
import ImagePage from './ImagePage/ImagePage.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
           <Route path='/game' element={<GamePage/>}/>
           <Route path='/image' element={<ImagePage/>}/>
           <Route path='*' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
