import React from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import { HiHeart } from 'react-icons/hi'

const ShowDetails = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const {id} = useParams()    
  const location = useLocation()        //use params to fetch each show id
  const [show, setShow] = React.useState([])   //init state to set show info    
  const [selectedSeason, setSelectedSeason] = React.useState(null);       //add hooks for episodes and seasons
  const [episodesBySeason, setEpisodesBySeason] = React.useState([]);
 
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
 
 const handleSeasonChange = (event) => {
  setSelectedSeason(Number(event.target.value));
};
  
//-----------------------------------------check for error----------------------------------------------
  if (error) {                 // if error display this message
    return <h1 className='text-red-600 font-extrabold'>{error.message}</h1>
  }
  if (loading){
    return <h1 className='text-white font-extrabold text-3xl justify-center items-center'>Loading ....</h1>
  }
//---------------------------------------------------------------------------------------------------
const search = location.state?.search || "" // back up variable
const type = location.state?.type || "all"  
  // check if there is a show is valid then displays or else show....loading..
  // @returns image , title, desciption, eps and seasons
//-------------------filter for seasons-----------------------------------------------
 
  
  
  return (
    <>
      
      {show && (
        <div key={id} className=' text-white mt -10 flex gap-8 flex-col md:flex-row md:items-end'>
          <img className="rounded-md w-48 " src={show.image} alt={show.title} />
          <div className=' rounded-md p-6 bg-black flex flex-col'>
            <p>Episodes</p>
            <h1 className='text-5xl font-extrabold mb-4 md:text7xl'>{show.title}</h1>
            <p>{show.description}</p>
            <p className='text-yellow-400 font-normal'><span>Last updated: </span>{show.updated && typeof show.updated === 'string' ? show.updated.slice(0, 10) : 'N/A'}</p>
            <HiHeart className=' font-bold text-4xl absolute flex  items-center bg-stone-400 top-2 right-1.5 p-1.5 rounded-[50%] z-[100]'/>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 mt-10 pl-2 text-white' >
            
          </div>
          <div>
            {show.seasons && (
              <select
                value={selectedSeason}
                onChange={handleSeasonChange }
              >
                {show.seasons.map((season) => (
                  <option key={season.season} value={season.season}>
                    {season.title}
                  </option>
                ))}
              </select>
            )}
            <ul>
            <hr/> 
              {selectedSeason && (
                    <>
                      {selectedSeason.episodes.map((episode) => (
                        <div key={episode.title}>
                          <p>{episode.description}</p>
                          <audio controls>
                            <source src={episode.file} type="audio/mp3" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
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