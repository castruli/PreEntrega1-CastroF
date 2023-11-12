// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import {ItemDetailContainer} from './components/ItemDetailContainer'
import {ItemListContainer} from './components/ItemListContainer'


function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenidos a TuEscabio.com!"/>}/>
        <Route path='/category/:categoryID' element={<ItemListContainer greeting="¡Bienvenidos a TuEscabio.com!"/>}/>
        <Route path='/items/:id' element={<ItemDetailContainer/>}/>
      </Routes>    
    </BrowserRouter>
  )
}

export default App
