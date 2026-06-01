import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}
export default App
