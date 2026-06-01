// import React from 'react'

// const Footer = () => {
//   return (
//      <div className="footer">
//         {/* inside footer */}
//           <div className="container">
//           {/* inside container */}
//              <div className="top">
//                 <div className='items'>
//                     <img src="./img/house-24.png" alt="" />
//                     <h1>HomeFix</h1>
                    
//                 </div>
//                <div className="item">
//                 <h2> Quick Links</h2>
//                 <span>Home</span>
//                 <span>Services</span>
//                 <span>Appliances</span>
//                 <span>Maintenance Plans</span>
//                 <span>About Us</span>
//                 <span>Contact Us</span>
//                </div>

//                <div className="item">
//                 <h2>Refigerator Repair</h2>
//                 <span>Washing Machine Repair</span>
//                 <span>AC Repair</span>
//                 <span>Microwave Repair</span>
//                 <span>Water Purifier Repair</span>
//                </div>

//                <div className="item">
//                 <h2> NewsLetter</h2>
//                 <span>Subscrive to get offers and tips on appliences care.</span>
                
//                </div>


//                <div className="item">
//                 <h2> For Clients</h2>
//                 <span> How to hire</span>
//                 <span>Project Catalog</span>
//                 <span>Business plus</span>
//                 <span>Direct contracts</span>
//                </div>

//              </div>

// <hr/>
//              <div className="bottom">
//                 <div className="left">
//                     <h2>2024 Homefix All Rights Reserved</h2>
//                 </div>
//                 <div className="right">
//                     <div className="social">
//                         <img src="./img/insta.png" alt="" />
//                         <img src="./img/facebook.png" alt="" />
//                         <img src="./img/twitter.png" alt="" />
//                         <img src="./img/youtube.png" alt="" />
//                         <img src="./img/linkedin.png" alt="" />
//                     </div>
//                     <div className="link">
//                         <span>English</span>
//                     </div>
//                 </div>
//              </div>

//        {/* container ending */}
//           </div>
//         {/* footer ending */}
//         </div>
//   )
// }

// export default Footer




import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 text-sm py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Centered Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
          
          {/* Brand/Logo Column */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Home<span className="text-blue-500">Fix</span>
            </h1>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Your trusted partner for home appliance repair and maintenance services.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-white font-semibold text-base tracking-wide mb-1">Quick Links</h2>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Home</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Services</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Appliances</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Maintenance Plans</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">About Us</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Contact Us</span>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-white font-semibold text-base tracking-wide mb-1">Our Services</h2>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Refrigerator Repair</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Washing Machine Repair</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">AC Repair</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Microwave Repair</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Water Purifier Repair</span>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-white font-semibold text-base tracking-wide mb-1">Newsletter</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to get offers and tips on appliances care.
            </p>
            {/* Simple Email Input Box */}
            <div className="flex mt-1 max-w-xs">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-900 text-white border border-slate-800 text-xs px-3 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 rounded-r-md transition-colors font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Clients Column */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-white font-semibold text-base tracking-wide mb-1">For Clients</h2>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">How to hire</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Project Catalog</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Business plus</span>
            <span className="hover:text-white cursor-pointer transition-colors w-fit">Direct contracts</span>
          </div>

        </div>

        {/* Decorative Divider Line */}
        <hr className="border-slate-800" />

        {/* Bottom Section: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-gray-500 gap-4">
          
          <div className="left">
            <h2>&copy; 2026 HomeFix. All Rights Reserved.</h2>
          </div>
          
          <div className="right flex flex-col sm:flex-row items-center gap-6">
            {/* Social Icons Container */}
            <div className="social flex items-center gap-4">
              <img src="./img/insta.png" alt="Instagram" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src="./img/facebook.png" alt="Facebook" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src="./img/twitter.png" alt="Twitter" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src="./img/youtube.png" alt="YouTube" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src="./img/linkedin.png" alt="LinkedIn" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
            
            {/* Language Selector */}
            <div className="link border border-slate-800 rounded px-2.5 py-1 hover:text-white cursor-pointer transition-colors">
              <span>English</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer


