import React, { useState, useEffect } from 'react';
import FavSortFilters from './FavSortFilters';

const Favourites = () => {
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from local storage when the component mounts
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFilteredFavorites(favorites);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleDeleteEpisode = (index) => {
    const newFavorites = [...filteredFavorites];
    newFavorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFilteredFavorites(newFavorites);
  };
   
  const handleFavePageFilter = (event) => {
    const filterType = event.target.innerText;
  
    switch (filterType) {
      case 'All':
        setFilteredFavorites(filteredFavorites);
        break;
      case 'A-Z':
        setFilteredFavorites([...filteredFavorites].sort((a, b) => a.showTitle.localeCompare(b.showTitle)));
        break;
      case 'Z-A':
        setFilteredFavorites([...filteredFavorites].sort((a, b) => b.showTitle.localeCompare(a.showTitle)));
        break;
      case 'Newest':
        setFilteredFavorites([...filteredFavorites].sort((a, b) => new Date(b.seasonUpdated) - new Date(a.seasonUpdated)));
        break;
      case 'Oldest':
        setFilteredFavorites([...filteredFavorites].sort((a, b) => new Date(a.seasonUpdated) - new Date(b.seasonUpdated)));
        break;
      default:
        setFilteredFavorites(filteredFavorites);
    }
  };
  

  const groupEpisodesByShow = (favorites) => {
    const grouped = {};
    favorites.forEach((favEpisode, index) => {
      if (!grouped[favEpisode.showTitle]) {
        grouped[favEpisode.showTitle] = { showTitle: favEpisode.showTitle, episodes: [] };
      }
      grouped[favEpisode.showTitle].episodes.push({ ...favEpisode, index });
    });
    return Object.values(grouped);
  };
  

  //call the function groupEpisodebbShow
  const groupedFavoritesEpisode = groupEpisodesByShow(filteredFavorites);

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