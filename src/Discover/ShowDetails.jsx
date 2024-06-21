import React from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import { HiHeart } from 'react-icons/hi'

const ShowDetails = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [showAll, setShowAll] = React.useState(false);
  const {id} = useParams()    
  const location = useLocation()        //use params to fetch each show id
  const [show, setShow] = React.useState([])   //init state to set show info    
  const [selectedSeason, setSelectedSeason] = React.useState(null);       //add hooks for episodes and seasons
  
 
//----------------fetch data-------------------------------
  React.useEffect(() => {
    async function addShowDetail(){
      setLoading(true)
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`)          //fetch  data and set it to set show 
        const data = await response.json()
        setShow(data);
        setSelectedSeason(data.seasons[0]);


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

  }, [id]) // return data


 //use effect if data and seasons are available
 
  const handleSeasonSelect = (season) => {
    setSelectedSeason(season === selectedSeason ? null : season);
  };


  const handleShowMoreClick = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const visibleSeasons = showAll ? show.seasons : show.seasons.slice(0, 5);


    
  //-----------------------------------------check for error----------------------------------------------
    if (error) {                 // if error display this message
      return <h1 className='text-red-600 font-extrabold'>{error.message}</h1>
    }
    if (loading){
      return <h1 className='text-white font-extrabold text-3xl justify-center items-center'>Loading ....</h1>
    }

    // check if there is a show is valid then displays or else show....loading..
    // @returns image , title, desciption, eps and seasons
  //-------------------filter for seasons-----------------------------------------------
  
  
  
  return (
    <>
      
      {show.image && (
        <div className=' text-white mt -10 flex sm:flex-wrap gap-8  flex-col  md:items-end'>
          <div  className='flex gap-3 justify-between'>
            <img className="rounded-md w-48 " src={show.image} alt={show.title} />
            <div className=' rounded-md p-6 bg-black flex flex-col'>
              <h1 className='text-5xl font-extrabold mb-4 md:text7xl'>{show.title}</h1>
              <p>{show.description}</p>
              <p className='text-yellow-400 font-normal'><span>Last updated: </span>{show.updated && typeof show.updated === 'string' ? show.updated.slice(0, 10) : 'N/A'}</p>
            </div>
          </div>
          
     
          <div className='flex gap-8 justify-between'>
            <div >
              <h3 className='text-5xl font-extrabold mb-4  md:text7xl '>Seasons</h3>
              <ul className='mb-6 '>
                {visibleSeasons.map((season) => (
                  <li
                    key={season.season}
                    className='cursor-pointer mb-2'
                    onClick={() => handleSeasonSelect(season)}
                  >
                    {season.title} ({season.episodes.length}{" "}
                    episodes)
                  </li>
                ))}
                <li className='cursor-pointer text-blue-500' onClick={handleShowMoreClick}>
                  {showAll ? 'Hide' : 'Show More'}
                </li>
              </ul>
            </div>
            <ul className='ml-6'> 
              {selectedSeason && (
                    <>
                      {selectedSeason.episodes.map((episode) => (
                        <li key={episode.title} className=''>
                          <p className='  font-normal line-clamp-2 text-ellipsis pr-10'>{episode.description}</p>
                          <div className='flex flex-row gap-3'>
                            
                            <audio controls>
                              <source src={episode.file} type="audio/mp3" />
                              Your browser does not support the audio element.
                            </audio>
                            <HiHeart className=' font-bold text-4xl flex  items-center bg-stone-400 top-2 right-1.5 p-1.5 rounded-[50%] z-[100]'/>
                          </div>
                          
                        </li>
                        
                      ))}
                    </>
                  )}
             </ul>
          </div>
        </div>   
        
      )}
    
    </>
  )
}

export default ShowDetails