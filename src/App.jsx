import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

function App() {
  const [preview, setPreview] = React.useState([]) // initialise state for  podcast preview
  const [error, setError] = React.useState(null) //  initialise state for  error messages
  
  
  React.useEffect(()=>{    //set use effect hook for handling api calls
    async function addPreview(){
      try {
        const response = await fetch('https://podcast-api.netlify.app')          //fetch  data and set it to setposts
        const data = await response.json()
        setPreview(data)

        if (!response.ok) {
            throw Error("Data Fetching Failed")
        }

      } catch (err) {
        setError(err)        //set error to err
        
      }
    }
    addPreview()  // call function
   }, [])

  if (error) {                 // if error display this message
    return <h1 className='text-red-600 font-extrabold'>{error.message}</h1>
  }
  


  return (
    <>
    <h1 className='text-red-600'>hello</h1>
    
    </>
  )
}

export default App
