import { HiHeart, HiOutlineHeart } from 'react-icons/hi'

const FavouriteButton = ({isFavorite, toggleFavorite }) => {
  return (
    <button  onClick={toggleFavorite}>
    {isFavorite ? <HiHeart className=' text-red-700 font-bold text-4xl' /> : <HiOutlineHeart className='font-bold text-4xl'/>}
  </button>
  )
}

export default FavouriteButton