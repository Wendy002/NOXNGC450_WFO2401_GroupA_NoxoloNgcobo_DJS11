import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";
import ShowsCarousel from './ShowsCarousel'

function ShowPreviews() {
  const [previews, setPreviews] = React.useState([]) // initialise state for  podcast preview
  const [error, setError] = React.useState(null) //  initialise state for  error messages
  const [loading, setLoading] = React.useState(false)
  
  
  React.useEffect(()=>{    //set use effect hook for handling api calls
    async function addPreviews(){
      setLoading(true)
      try {
        const response = await fetch('https://podcast-api.netlify.app')          //fetch  data and set it to set preview
        const data = await response.json()
        setPreviews(data)

        if (!response.ok) {
            throw Error("Data Fetching Failed")
        }

      } catch (err) {
        setError(err)        //set error to err
        
      } finally {
        setLoading(false)
      }
    }
    addPreviews()  // call function
   }, [])

  if (error) {                 // if error display this message
    return <h1 className='text-red-600 font-extrabold'>{error.message}</h1>
  }
  if (loading){
    return <h1 className='text-white font-extrabold text-3xl justify-center items-center'>Loading ....</h1>
  }


  return (
    <> 


       <ul className='list-none flex flex-wrap text-white'>
        {previews.map(preview => (
          <li key={preview.id} className='flex flex-col gap-2'>
            <img 
            src={preview.image} 
            width={174}
            height={174}
            alt={preview.title}
            className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'/>
            <p className=' text-12 truncate font-normal capitalize text-white-4'>{preview.description}</p>
            <p><span className='font-bold'>Seasons: </span>{preview.seasons}</p>
            <p><span className='font-bold'>Genres: </span>{preview.genres}</p>
            

          </li>
        ))}
      </ul>

    </>
  )
}

export default ShowPreviews;
