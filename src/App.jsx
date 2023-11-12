// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import {ItemProductContainer} from './components/ItemProductContainer'


function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenidos a TuEscabio.com!"/>}/>
        <Route path='/category/:categoryID' element={<ItemListContainer greeting="¡Bienvenidos a TuEscabio.com!"/>}/>
        <Route path='/products/:id' element={<ItemProductContainer/>}/>
      </Routes>    
    </BrowserRouter>
  )
}

export default App
