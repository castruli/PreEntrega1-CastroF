// import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { CardList } from "./components/CardList"


function App() {
  
  return (
    <>      
    <NavBar/>
    <ItemListContainer greeting="¡Bienvenidos a TuEscabio.com!"/>
    <CardList/>
    </>
  )
}

export default App
