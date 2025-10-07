import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { movies as mock } from '../utils/mockMovies'
import { useFavorites } from '../context/FavoritesContext'

export default function MovieDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = mock.find(m => m.id === id)
  const { favorites, toggleFavorite } = useFavorites()
  if(!movie) return <div className="pt-24">Película no encontrada</div>

  const isFav = favorites.some(f => f.id === movie.id)

  return (
    <div className="pt-24">
      <button onClick={() => navigate(-1)} className="mb-4 px-3 py-2 rounded border border-white/6">Volver</button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <img src={movie.poster} alt={movie.title} className="w-full rounded-md" />
          <div className="mt-4 flex gap-2">
            <button onClick={() => toggleFavorite(movie)} className={`px-4 py-2 rounded ${isFav ? 'bg-tomato' : 'bg-white/6'}`}>{isFav ? 'Quitarfavorito' : 'Añadir a favoritos'}</button>
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-4xl font-bold">{movie.title} <span className="text-gray-400 text-xl">({movie.year})</span></h2>
          <p className="text-gray-300 mt-4">{movie.overview}</p>

          <div className="mt-6">
            <h3 className="font-semibold">Género</h3>
            <div className="flex gap-2 mt-2">{movie.genre.map(g => <div key={g} className="px-3 py-1 text-sm border border-white/6 rounded">{g}</div>)}</div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Tráiler</h3>
            <div className="mt-3 aspect-video bg-black rounded overflow-hidden">
              <iframe src={movie.trailer} title={`trailer-${movie.id}`} className="w-full h-full" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}