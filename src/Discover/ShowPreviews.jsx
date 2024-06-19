import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import ShowsCarousel from './ShowsCarousel';
import { FaRegHeart } from "react-icons/fa";
import { HiHeart} from 'react-icons/hi'

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
          <li key={preview.id} className='relative no-underline bg-black max-w-[220px] h-[280px]
          flex flex-col justify-start items-center p-4 rounded-md shadow-[0 0 16px 0 rgba(0, 0, 0, 0.1)]
          hover:cursor-pointer hover:translate-y-[-8px] hover:transition-all hover:shadow-[0 0 18px 0 rgba(0, 0, 0, 0.3)] 
          brightness-125'>
            <div>
              <HiHeart/>
              <img 
              src={preview.image} 
              width={174}
              height={174}
              alt={preview.title}
              className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'/>
            </div>
            
            <div className='flex flex-col'>
              <h3>{preview.title}</h3>
              <p className=' text-12 truncate font-normal capitalize text-white-4'>{preview.description}</p>
              <div>
                <p><span className='font-bold'>Seasons: </span>{preview.seasons}</p>
                <p><span className='font-bold'>Genres: </span>{preview.genres}</p>
              </div>
              
            </div>
            
            

          </li>
        ))}
      </ul>

    </>
  )
}

export default ShowPreviews;
