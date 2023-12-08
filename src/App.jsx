// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'
// import {Carousels } from './components/Carousels'
import { CartProvider } from './contexts/CartContext'
import {Cart} from './components/Cart'
import { ItemDetailContainer } from './components/ItemDetailContainer'
function App() {
  
  return (
  <CartProvider>
    <BrowserRouter>
      <NavBar/>
      {/* <Carousels/> */}
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenidos a TuEscabio.com!"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Buscá entre estos productos"/>}/>
        <Route path='/items/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>    
    </BrowserRouter>
  </CartProvider>
  )
}

export default App
