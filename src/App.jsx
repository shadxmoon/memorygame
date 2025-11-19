
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage/MainPage.jsx'
import GamePage from './GamePage/GamePage.jsx'
import ImagePage from './ImagePage/ImagePage.jsx'
import Grid from './Grid/Grid.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
           <Route path='/game' element={<GamePage/>}>
              <Route path='' element={<Grid/>}/> 
              <Route path='image/:id' element={<ImagePage/>}/> 
           </Route>
           <Route path='*' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
