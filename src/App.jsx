import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import ScrollToTop from './components/scrollto/ScrollToTop';
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <div className='app'>
      <Navbar/>
      <Routes>
  <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>} />
    <Route path='/about' element={<About/>}></Route>
      </Routes>
          <Footer/>
    </div>
    </BrowserRouter>   
  )
}
export default App
