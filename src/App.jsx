import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import SideBar from './Layout-components/SideBar.jsx'
import Favourites from './Favourites/Favourites.jsx'
import ShowPreviews from './Discover/ShowPreviews.jsx'
import ShowDetails from './Discover/ShowDetails.jsx'
import ShowsCarousel from './Discover/ShowsCarousel.jsx'
import AudioPlayer from './Layout-components/AudioPlayer.jsx'

const App = () => {

  //const [menuOpen, setMenuOpen] =React.useState(true); 
  // addd this inside sideBar later setMenuOpen={setMenuOpen}
  return (
    <BrowserRouter>
      <div className=' flex flex-row min-h-screen w-full bg-gray-900 overflow-x-hidden overflow-y-hidden'>
        <SideBar />   
        <div className='flex flex-col flex-[3]'> 

        </div>

      </div>
    </BrowserRouter>
  
    
  )
}

export default App