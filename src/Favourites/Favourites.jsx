import React, { useState, useEffect } from 'react';
import FavSortFilters from './FavSortFilters';

const Favourites = () => {
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage when the component mounts
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFilteredFavorites(favorites);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // const handleDeleteEpisode = (episode) => {
  //   const newFavorites = favorites.filter((favorite) => favorite.episodeTitle !== episode.episodeTitle);
  //   setFavorites(newFavorites);
  // };

  return (

    <h1> Favourites</h1>
    // <div className='text-white'>
    //   <h2 className='text-3xl text-white font-extrabold mb-4 md:text-5xl'>Favourites episodes</h2>
    //   <ul>
    //     {favorites.map((favorite) => (
    //       <div key={favorite.episodeTitle} className='flex justify-between '>
    //         <li >
    //           <p>{favorite.showTitle}: {favorite.episodeTitle}</p>
    //         </li> 
    //         <button
    //           className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
    //           onClick={() => handleDeleteEpisode(favorite)}
    //         >
    //           Delete
    //         </button>
    //       </div>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Favourites;