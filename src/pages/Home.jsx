import React, { useMemo, useState } from 'react'
import { movies as mock } from '../utils/mockMovies'
import MovieGrid from '../components/MovieGrid'
import { useFavorites } from '../context/FavoritesContext'

export default function Home(){
  const [filter, setFilter] = useState('all')
  const { favorites } = useFavorites()

  const list = useMemo(() => {
    if(filter === 'favorites') return favorites
    return mock
  }, [filter, favorites])

  return (
    <div className="pt-24">{/* padding adjusted for fixed navbar */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Descubrir películas</h1>
        <div className="flex gap-2">
          <button onClick={() => setFilter('all')} className={`px-3 py-2 rounded ${filter==='all' ? 'bg-white/5' : 'bg-white/3'}`}>Todas</button>
          <button onClick={() => setFilter('favorites')} className={`px-3 py-2 rounded ${filter==='favorites' ? 'bg-white/5' : 'bg-white/3'}`}>Favoritos</button>
        </div>
      </div>

      <MovieGrid movies={list} />
    </div>
  )
}