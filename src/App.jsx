import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

function App() {
  const [posts, setPosts] = React.useState([]) // initialise state for  blog posts
  const [error, setError] = React.useState(null) //  initialise state for  error messages

  


  return (
    <>
    <h1 className='text-red-600'>hello</h1>
    </>
  )
}

export default App
