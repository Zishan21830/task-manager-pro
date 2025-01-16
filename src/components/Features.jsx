import React from 'react'
import { CiBellOn, CiCalendar } from "react-icons/ci";
import { RxLoop } from "react-icons/rx";

const Features = () => {
  return (
    <div className='w-full min-h-fit bg-lightGreen'>
    <div className='pl-6 py-16'>
        <p>Add A Task</p>
    </div>
    <div className='pl-6'>
    {/* Feature Options */}
        <div className='flex gap-3 items-center text-2xl pb-3'>
            <CiBellOn/>
            <RxLoop/>
            <CiCalendar/>
        </div>
        <button>   </button>
    </div>
    </div>
  )
}

export default Features