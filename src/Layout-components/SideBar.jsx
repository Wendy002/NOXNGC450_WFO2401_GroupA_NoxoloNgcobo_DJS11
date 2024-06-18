import React from 'react'
import { HiHome, HiHeart} from 'react-icons/hi'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


const SideBar = () => {
  return (
    <div className=''>
        <div>GenZcast</div>
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