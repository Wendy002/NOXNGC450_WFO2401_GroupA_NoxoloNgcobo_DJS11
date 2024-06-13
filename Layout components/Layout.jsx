import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-black  h-screen'>
      <div>
        <SideBar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
    
  )
}

export default Layout