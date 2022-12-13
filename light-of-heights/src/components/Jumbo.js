import React from 'react'
import Navbar from './Navbar'

function Jumbo() {
  return (
    <div className='w-full h-screen bg-jumbo bg-no-repeat bg-cover bg-fixed bg-opacity-25'>
        <Navbar />
        <div className='px-9'>
        <p className='text-[80px] text-[#fff] font-bold w-1/2 mt-16'>The whole world awaits</p>
        <input className='w-full py-4 px-3 rounded-lg focus:outline-none text-[#fff] font-bold bg-white bg-opacity-50' placeholder='search destinations, hotels' />
        <div>
            <h2 className='mt-5 font-semibold text-[#fff] text-[26px] tracking-wider'>Top categories</h2>
        </div>
        <div className='flex justify-between items-center text-[#fff] text-[20px] mt-3'>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
        </div>
        </div>
        

    </div>
  )
}

export default Jumbo