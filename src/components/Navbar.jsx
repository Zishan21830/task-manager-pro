import React from 'react'

// import icons from react-icons library
import { IoMenu, IoGridOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { PiAtomBold, PiMoonStarsLight, PiAtomLight } from "react-icons/pi";

const Navbar = () => {
  return (
    // Header starts here
    <header className='border-2 border-red-400 h-14 px-8 py-2 flex justify-between'>
        {/* left container */}
        <div className='flex gap-5 items-center text-xl'>
            <IoMenu/>
            <PiAtomLight/>
        </div>
        {/* right container */}
        <div className='flex gap-5 items-center text-xl'>
            <IoIosSearch/>
            <IoGridOutline/>
            <PiMoonStarsLight/>
        </div>
    </header>
    // Header ends here
  )
}

export default Navbar