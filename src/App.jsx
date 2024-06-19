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
      <div className=' flex flex-row min-h-screen w-full bg-gray-900 overflow-x-hidden overflow-y-hidden'>
        <SideBar menuOpen = {menuOpen}  onToggle={onToggle}/>   
        <div className='flex flex-col flex-[3]'> 
        <Routes>
          <Route path='/' exact element={<ShowPreviews/>}/>
          <Route path='/Favourites'  exact element={<Favourites/>}/>
          <Route path='/shows/:id'  exact element={<ShowDetails/>}/>

        </Routes>

        </div>

      </div>
    </BrowserRouter>
  
    
  )
}

export default App