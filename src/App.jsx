import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <>

    <Header />
    <Hero />

    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    </Routes>
    
    <Footer />
    </>
  )
}

export default App