import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import {icon} from '../assets/icon.svg';
import {favouriteIcon} from '../assets/favouriteIcon.svg';
import {searchIcon} from '../assets/searchIcon.svg';
import {homeIcon} from '../assets/homeIcon.svg';


//name: ----, to:-----, icon:.... 'for links'

const SideBar = () => {
  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);

  return (
    <> 
      <div className='md:flex  flex-col w-[240px] py-10 px-4 bg-black'>
        <img src={icon} alt='logo' className='w-full h-14 object-contain '/>

      </div>
      
      
    </>
  )
}

export default SideBar