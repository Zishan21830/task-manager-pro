import React from 'react'

// import icons from react-icons library
import { IoMenuOutline, IoGridOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { TbMoonStars } from "react-icons/tb";
import {PiAtomBold } from "react-icons/pi";

const Navbar = () => {
  return (
    // Header starts here
    <header className='h-14 px-8 py-2 flex justify-between'>
        {/* left container */}
        <div className='flex gap-5 items-center text-xl'>
            <IoMenuOutline className='text-2xl'/>

            {/* logo and name */}
            <div className='flex items-center justify-center text-green font-bold text-2xl'>
            <PiAtomBold className='font-bold'/>
            <p className='font-sen'>DoIt</p>
            </div>
        </div>
        {/* right container */}
        <div className='flex gap-5 items-center text-2xl'>
            <IoIosSearch/>
            <IoGridOutline/>
            <TbMoonStars/>
        </div>   
    </header>
    // Header ends here
    
  )
}

export default Navbar