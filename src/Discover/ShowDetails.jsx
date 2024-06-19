import React from 'react'
import {Link, useParams, useLocation } from 'react-router-dom'

const ShowDetails = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const {id} = useParams()    
  const location = useLocation()        //use params to fetch each show id
  const [show, setShow] = React.useState(null)   //init state to set show info    

  React.useEffect(() => {
    async function addShowDetail(){
      setLoading(true)
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`)          //fetch  data and set it to set show 
        const data = await response.json()
        setShow(data)

        if (!response.ok) {
            throw Error("Data Fetching Failed")
        }

      } catch (err) {
        setError(err)        //set error to err
        
      } finally {
        setLoading(false)
      }
    }
    addShowDetail()  

  }, [id])

  if (error) {                 // if error display this message
    return <h1 className='text-red-600 font-extrabold'>{error.message}</h1>
  }
  if (loading){
    return <h1 className='text-white font-extrabold text-3xl justify-center items-center'>Loading ....</h1>
  }


  
  return (
    <div>ShowDetails</div>
  )
}

export default ShowDetails