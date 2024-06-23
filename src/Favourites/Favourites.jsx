import React, { useState, useEffect } from 'react';
import FavSortFilters from './FavSortFilters';

const Favourites = () => {
  // const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites') || '[]'));

  // useEffect(() => {
  //   localStorage.setItem('favorites', JSON.stringify(favorites));
  // }, [favorites]);

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