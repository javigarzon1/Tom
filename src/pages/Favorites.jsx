import React from 'react'
import { useFavorites } from '../context/FavoritesContext'
import MovieGrid from '../components/MovieGrid'

export default function Favorites(){
  const { favorites } = useFavorites()

  return (
    <div className="pt-24">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tus favoritos</h1>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center text-gray-400 py-16">Todavía no tienes favoritos. Explora y añade algunas películas.</div>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </div>
  )
}


