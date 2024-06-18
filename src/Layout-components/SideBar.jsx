import React from 'react'
import { HiHome, HiHeart} from 'react-icons/hi'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


const SideBar = () => {
  return (
    <div className='font-sans flex flex-[0.5] flex-col text-white bg-slate-800 h-screen w-1/4 '>
        <div className='justify-between flex items-center px-16 w-[86%]'>
            <div className='text-[#ff564a] flex items-center justify-center gap-1.5 font-[bold] text-xl mx-0 my-4'>
                <img src='../assets/icon.svg'/>
                <p className='font-bold text-2xl'>GenZ<span className='text-white'>cast</span></p>
            </div>
            <div className=' font-bold text-2xl hidden md:block'><IoClose/></div>
        </div>
       
        
        <div className=' text-2xl font-bold px-[4px] md:px-[16px] flex flex-row justify-start items-center gap-[12px] cursor-pointer w-full hover:text-[#ff564a]'>
            <HiHome/>
            <p className='py-12 px-0'>Discover</p>             
        </div>
        <div className='text-2xl font-bold px-[4px] md:px-[16px] flex flex-row justify-start items-center gap-[12px] cursor-pointer w-full hover:text-[#ff564a]'>
            <HiHeart/>
            <p className='py-12 px-0'>Favorites</p> 
        </div>
    </div>
  )
}

export default SideBar