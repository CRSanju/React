import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
   return (
    <div>
      <h1>FaceBook</h1>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/About" element = {<About />}></Route>
        <Route path="/Contact" element = {<Contact/>}></Route>
      </Routes>
    </div>
   )
}

export default App
