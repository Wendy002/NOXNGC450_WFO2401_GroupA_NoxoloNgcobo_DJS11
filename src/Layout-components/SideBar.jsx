import React from 'react'
import { HiHome, HiHeart} from 'react-icons/hi'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


const SideBar = () => {
  return (
    <div className='font-sans flex flex-[0.5] flex-col text-white bg-slate-800 h-screen w-1/4 '>
        <div className='text-[#ff564a] flex items-center justify-center gap-1.5 font-[bold] text-xl mx-0 my-4'>
            <img src='../assets/icon.svg'/>
            <p className='font-bold text-2xl'>GenZ<span className='text-white'>cast</span></p>
        </div>
        <div><IoClose/></div>
        <div>
            <HiHome/>
            <p>Discover</p>             
        </div>
        <div>
            <HiHeart/>
            <p>Favorites</p> 
        </div>

    </div>
  )
}

export default SideBar