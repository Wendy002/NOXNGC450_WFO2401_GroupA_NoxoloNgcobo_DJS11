import React from 'react'
import {Link, NavLink } from 'react-router-dom'



//name: ----, to:-----, icon:.... 'for links'

const SideBar = () => {
  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);

  return (
    <> 
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-black'>
        <img src='../assets/icon.svg' alt='logo' className='w-full h-14 object-contain '/>

      </div>
      
      
    </>
  )
}

export default SideBar