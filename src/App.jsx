import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Page1_Home'
import Women from './Pages/Women'
import Men from './Pages/Men'
import Contact from './Pages/Contact'
import Kids from './Pages/Kids'
import End from './Components/Footer/End'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Search from './Components/Navbar/SearchBar/Search'
import ProductDescrip from './Pages/ProductDescrip'
import ScrolltoTop from './Components/Scroll/ScrolltoTop'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <ScrolltoTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/ProductDescrip/:category/:id' element={<ProductDescrip/>} />
      </Routes>
      <End/>
      
    </div>
  )
}

export default App
