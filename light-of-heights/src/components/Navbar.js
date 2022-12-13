import React from 'react'

function Navbar() {
  return (
    <> 
     <div className='flex justify-between items-center text-[#fff] px-4 pt-5'>
        <h2 className='font-bold text-[30px]'>trxvl.</h2>
        <div className='flex space-x-9 items-center'>
        <div className='capitalize flex space-x-9 items-center tracking-wide'>
          <p>Home</p>
          <p>stays</p>
          <p>Flights</p>
          <p>Packages</p>
        </div>
        <h2 className='font-bold text-[16px]'>Sign Up</h2>
        </div>
    </div>
    </>

  )
}

export default Navbar