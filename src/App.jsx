import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import SideBar from './Layout-components/SideBar.jsx'
import Favourites from './Favourites/Favourites.jsx'
import ShowPreviews from './Discover/ShowPreviews.jsx'
import ShowDetails from './Discover/ShowDetails.jsx'
import ShowsCarousel from './Discover/ShowsCarousel.jsx'
import AudioPlayer from './Layout-components/AudioPlayer.jsx'

const App = () => {

  const [menuOpen, setMenuOpen] =React.useState(true); 

  const onToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <BrowserRouter>
      <div className=' flex flex-row min-h-screen w-full bg-gray-900'>
        <SideBar menuOpen = {menuOpen}  onToggle={onToggle}/>   
        <div className='h-screen flex-1 p-7 overflow-x-hidden'> 
        <Routes>
          <Route path='/' exact element={<ShowPreviews/>}/>
          <Route path='/Favourites'  exact element={<Favourites/>}/>
          <Route path='/show/:id'  exact element={<ShowDetails/>}/>

        </Routes>

        </div>
        
      </div>
      <div className='sticky bottom-0 z-100'>
       < AudioPlayer/>
      </div>
    </BrowserRouter>
  
    
  )
}

export default App