import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from '../Layout components/Layout.jsx'
import SideBar from '../Layout components/SideBar.jsx'
import Favourites from './Favourites/Favourites.jsx'
import ShowPreviews from './Home/ShowPreviews.jsx'
import ShowPreviewDetails from './Home/ShowPreviewDetails.jsx'

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route element={<Layout/>}>
         
         </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App