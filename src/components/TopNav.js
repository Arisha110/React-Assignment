import React from 'react'
import { FaHandsClapping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import { BiMessageAltDetail } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

import pic from "../assets/beautiful-girl-stands-park_8353-5084.avif"


const TopNav = () => {
  return (
    
<div className="flex w-[75vw] justify-between mt-4 "> 
        <div className="flex justify-center items-center text-2xl font-bold gap-2">
            <h1>Hello </h1>
            <FaHandsClapping  color='#FFD700'/>
        </div>

        <div className='flex gap-4'>
            <div className=' w-10 h-10 flex items-center justify-center rounded-full border-neutral-300 shadow-md'><IoIosSearch /></div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-neutral-300 shadow-md'><CgFileDocument /></div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-neutral-300 shadow-md'><BiMessageAltDetail /></div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-neutral-300 shadow-md'><MdOutlineNotifications /></div>
            

 <div className='flex justify-center items-center gap-2 rounded-lg border-neutral-300 shadow-md w-40'>
          <div className='w-8 h-8 rounded-full'><img className='w-8 h-8 rounded-full' src={pic}></img></div>

          <div>
              <p className='text-sm font-semibold'>Jane Doe</p>
          <p className=' text-xs text-gray-500'>Line Producer</p>
          </div>
          <IoChevronDown />
        </div>

        </div>

       
    </div>



    
    
  )
}

export default TopNav