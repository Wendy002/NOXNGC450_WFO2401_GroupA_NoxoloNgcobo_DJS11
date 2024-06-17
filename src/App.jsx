import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import SideBar from '../Layout-components/SideBar.jsx'
import Favourites from './Favourites/Favourites.jsx'
import ShowPreviews from './Discover/ShowPreviews.jsx'
import ShowDetails from './Discover/ShowDetails.jsx'
import showsCarousel from './Discover/ShowsCarousel.jsx'
import AudioPlayer from '../Layout components/AudioPlayer.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <SideBar/>
        <div>
            <div>
              <Routes>
                <Route path='/' element={<showsCarousel/>}/>
                <Route path='Discover' element={<ShowPreviews/>}/>
                <Route path='Favourite' element={<Favourites/>}/>
              </Routes>
            </div>
        </div>
        <div>
          <AudioPlayer/>
        </div>
      </div>
      
      
    </BrowserRouter>
  )
}

export default App