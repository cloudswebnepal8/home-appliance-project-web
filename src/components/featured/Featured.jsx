import React from 'react'
import './Featured.scss'
const Featured = () => {
  return (
    <div className=''>
         <div className='main-container flex w-full max-w-7xl mx-auto items-center justify-between gap-12'>
           <div className='container'>
             {/* Left conainer */}
            <div className='container-left flex flex-col max-w-xl gap-6'>
                <span className='text-blue-600 bg-blue-50 font-semibold text-sm px-4 py-1.5 rounded-full w-fit'>
                  Trusted Home Appliance Service
                </span>

                <h1 className='text-5xl font-extrabold text-slate-900 tracking-tight leading-tight'>
                  We Repair. <br />
                  We Maintain. <br/>
                  <span className='text-blue-600'>You Relax.</span>
                </h1>

                <p className='text-slate-500 text-lg leading-relaxed'>
                  Professional repair and maintenance services for all your home appliances. 
                  Quick, reliable and affordable solutions at your doorstep.        
                </p>

                <div className='buttons flex items-center gap-4 mt-2'>
                    <button className='bg-blue-600 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm hover:bg-blue-700 transition'>
                      Book a Service
                    </button>
                    <button className='bg-white text-slate-800 border border-slate-300 font-medium px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-50 transition'>
                      Our Services &rarr;
                    </button>
                </div>

                <div className='social-media flex items-center gap-4 mt-4'>
                    {/* Avatars placeholder */}
                    <div className='flex -space-x-2'>
                        <div className='w-8 h-8 rounded-full bg-slate-300 border-2 border-white'></div>
                        <div className='w-8 h-8 rounded-full bg-slate-400 border-2 border-white'></div>
                        <div className='w-8 h-8 rounded-full bg-slate-500 border-2 border-white'></div>
                    </div>
                    <div>
                        <div className='font-bold text-slate-900 text-lg leading-none'>10K+</div>
                        <div className='text-slate-500 text-sm'>Happy Customers</div>
                    </div>
                </div>
            </div>

            <div className='container-right relative flex-1 flex justify-end items-center min-h-[450px]'>
              
                <div className='absolute right-0 bottom-0 w-96 h-96 bg-blue-600 rounded-full -z-10 opacity-90'></div>
                
               
                <div className='absolute top-4 right-48 bg-white shadow-lg rounded-xl p-3 flex items-center gap-3 border border-slate-100 z-10'>
                    <div className='w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold'>✓</div>
                    <span className='text-xs font-semibold text-slate-800'>Expert<br/>Technicians</span>
                </div>

               
                <div className='absolute left-12 top-1/3 bg-white shadow-lg rounded-xl p-3 flex items-center gap-3 border border-slate-100 z-10'>
                    <div className='w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm'></div>
                    <span className='text-xs font-semibold text-slate-800'>Quick Service</span>
            </div>

             <div className='absolute bottom-6 right-12 bg-white shadow-lg rounded-xl p-3 flex items-center gap-3 border border-slate-100 z-10'>
                    <div className='w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm'></div>
                    <span className='text-xs font-semibold text-slate-800'>Affordable Price</span>
                </div>
            </div>
           </div>
           <div className='down-feature-container'></div>  
        </div>
      
    </div>
  )
}

export default Featured
