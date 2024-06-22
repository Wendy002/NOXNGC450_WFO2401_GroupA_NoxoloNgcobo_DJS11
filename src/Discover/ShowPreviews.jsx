import React from 'react'
import { SiApplemusic } from "react-icons/si";
import ShowsCarousel from './ShowsCarousel.jsx';
import { HiHeart} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import Filters from '../Layout-components/Filters.jsx';
import Searchbar from '../Layout-components/Searchbar.jsx';
import Fuse from "fuse.js"

function ShowPreviews() {
  const [previews, setPreviews] = React.useState([]) // initialise state for  podcast preview
  const [error, setError] = React.useState(null) //  initialise state for  error messages
  const [loading, setLoading] = React.useState(false)
  // const [query, setQuery] = React.useState(null)
  // const [previewState, setPreviewState] = React.useState(previews);
  
  
  React.useEffect(()=>{    //set use effect hook for handling api calls
    async function addPreviews(){
      setLoading(true)
      try {
        const response = await fetch('https://podcast-api.netlify.app')          //fetch  data and set it to set preview
        
        if (!response.ok) {
          throw Error("Data Fetching Failed")
      }
        
        const data = await response.json()
        setPreviews(data)

      } catch (err) {
        setError(err)        //set error to err
        
      } finally {
        setLoading(false)
      }
    }
    addPreviews()  // call function
   }, [])

  // let matchingTitleShows;


  // const handleInput = (event) => {
  //   const input = event.target.value;
  //   setQuery(input);
  // };

  // const handleSearch = () => {
  //   if (query) {
  //     // Use Fuse.js for fuzzy searching
  //     const options = {
  //       keys: ["title"], // Specify the fields you want to search
  //       includeScore: true,
  //     };
  //     const fuse = new Fuse(previews, options);
  //     const results = fuse.search(query);
      
  //     // Extract only the items from the results (without the score)
  //     matchingTitleShows = results.map((result) => result.item);

  //     setPreviewState(matchingTitleShows);
  //   } else {
  //     setPreviewState(preview);
  //   }
  // };

  if (error) {                 // if error display this message
    return <h1 className='text-red-600 font-extrabold'>{error.message}</h1>
  }
  if (loading){
    return <h1 className='text-white font-extrabold text-3xl justify-center items-center'>Loading ....</h1>
  }


  return (
    <> 
       
    
       <ul className='list-none flex flex-wrap ml-8 text-white gap-10  justify-start'>
        {previews.map(preview => (
          <Link key={preview.id} to={`/show/${preview.id}`}>
            <li  className='relative no-underline bg-black max-w-[220px] h-[360px]
            flex flex-col justify-start items-center p-4  rounded-md shadow-[0 0 16px 0 rgba(0, 0, 0, 0.1)]
            hover:cursor-pointer hover:translate-y-[-8px] hover:transition-all hover:shadow-[0 0 18px 0 rgba(0, 0, 0, 0.3)] 
            brightness-125 overflow-hidden'>
              
                <div>
                  <img 
                  src={preview.image} 
                  width={174}
                  height={174}
                  alt={preview.title}
                  className='aspect-square h-fit w-full px-0 rounded-xl 2xl:size-[200px]'/>
                </div>
                
                <div className='flex items-end font-normal pt-4 px-0 pb-0 w-full'>
                  <div className='flex w-full flex-col justify-start gap-1'>
                    <p className='truncate font-bold'>{preview.title}</p>
                    <p className=' text-gray-500 font-normal line-clamp-2 text-ellipsis'>{preview.description}</p>
                    <div className='flex justify-between'>
                      <p><span className='font-bold'>Seasons: </span>{preview.seasons}</p>
                      <p><span className='font-bold'>Genres: </span>{preview.genres.length}</p>
                    </div>
                    <p className=' text-gray-500 font-normal'><span></span>{preview.updated.slice(0,10)}</p>
                  </div>
                  
                </div>

            </li>

          </Link>
         
        ))}
      </ul>

    </>
  )
}

export default ShowPreviews;
