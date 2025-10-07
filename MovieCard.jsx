import React from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { motion } from 'framer-motion'

export default function MovieCard({ movie }){
  const { favorites, toggleFavorite } = useFavorites()
  const isFav = favorites.some(f => f.id === movie.id)

  return (
    <motion.article whileHover={{ scale: 1.03 }} className="card rounded-md overflow-hidden shadow-sm">
      <div className="relative">
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
        </Link>
        <button onClick={() => toggleFavorite(movie)} className={`absolute top-3 right-3 p-2 rounded-md ${isFav ? 'bg-tomato text-white' : 'bg-white/6 text-white'}`} aria-label="Toggle favorite">
          {isFav ? '♥' : '♡'}
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{movie.title}</h3>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>⭐ {movie.rating}</span>
        </div>
      </div>
    </motion.article>
  )
}