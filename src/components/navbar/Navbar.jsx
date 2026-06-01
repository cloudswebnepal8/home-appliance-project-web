import React from 'react'

const Navbar = () => {
  return (
    <div className='main-container w-full bg-white shadow-md sticky top-0 z-50'>
        <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
         <div className='logo text-xl font-bold text-gray-800 cursor-pointer'>LOGO</div>
         <div className='links flex items-center gap-6 font-medium text-gray-600'>
            <span className='hover:text-blue-600 transition-colors cursor-pointer>Home</span>
            <span className='hover:text-blue-600 transition-colors cursor-pointer>Services</span>
            <span className='hover:text-blue-600 transition-colors cursor-pointer>Appliances</span>
            <span className='hover:text-blue-600 transition-colors cursor-pointer>Maintenence</span>
            <span className='hover:text-blue-600 transition-colors cursor-pointer>About Us</span>
            <span className='hover:text-blue-600 transition-colors cursor-pointer>Contact Us</span>
            <button className='bg-blue-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-color shadow-sm ml-2'>Call Us: 1800-123-4567</button>
         </div>
        </div>
        </div>
  )
}

export default Navbar

