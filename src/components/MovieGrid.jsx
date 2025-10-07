import React from 'react'
import MovieCard from './MovieCard'

export default function MovieGrid({ movies }){
  if(!movies.length) return <div className="text-center text-gray-400 py-16">No hay resultados</div>
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(m => <MovieCard key={m.id} movie={m} />)}
    </div>
  )
}