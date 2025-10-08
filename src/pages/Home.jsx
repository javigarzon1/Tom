import React, { useEffect, useMemo, useRef, useState } from 'react'
import { movies as mock } from '../utils/mockMovies'
import MovieGrid from '../components/MovieGrid'
import { useFavorites } from '../context/FavoritesContext'
import { Link } from 'react-router-dom'

export default function Home(){
  const [filter, setFilter] = useState('all')
  const { favorites } = useFavorites()

  const list = useMemo(() => {
    if(filter === 'favorites') return favorites
    return mock
  }, [filter, favorites])

  useEffect(() => {
    document.title = 'Tomatoes — Descubrir películas'
  }, [])

  const featured = mock.filter(m => m.featured)
  const movies = mock.filter(m => m.type === 'movie').slice(0, 12)
  const series = mock.filter(m => m.type === 'series').slice(0, 12)

  const featuredRef = useRef(null)

  function scrollFeatured(direction){
    const el = featuredRef.current
    if(!el) return
    const firstCard = el.querySelector('.feat-card')
    const step = (firstCard ? firstCard.clientWidth : 200) + 16 // card width + gap
    el.scrollBy({ left: direction * step * 3, behavior: 'smooth' })
  }

  return (
    <div className="pt-24">{/* padding adjusted for fixed navbar */}
      {/* Cabecera simple con filtros existentes */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Descubrir</h1>
        <div className="flex gap-2">
          <button onClick={() => setFilter('all')} className={`px-3 py-2 rounded ${filter==='all' ? 'bg-white/5' : 'bg-white/3'}`}>Todas</button>
          <button onClick={() => setFilter('favorites')} className={`px-3 py-2 rounded ${filter==='favorites' ? 'bg-white/5' : 'bg-white/3'}`}>Favoritos</button>
        </div>
      </div>

      {/* Destacados */}
      <section className="mb-10">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-semibold">Títulos destacados</h2>
        </div>
        <div className="relative">
          <button
            aria-label="Desplazar destacados a la izquierda"
            onClick={() => scrollFeatured(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-emerald-900/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div
            ref={featuredRef}
            className="mx-auto overflow-x-auto no-scrollbar"
          >
            <div className="flex gap-4 px-10">
              {featured.map(item => (
                <div key={`feat-${item.id}`} className="feat-card group cursor-pointer w-[180px] sm:w-[200px] md:w-[220px]">
                  <div className="relative mb-3 rounded overflow-hidden bg-[#0B2215]">
                    <div className="absolute top-2 left-2 z-10">
                      <span className="px-2.5 py-1 bg-emerald-500 text-black text-[10px] font-bold uppercase rounded">DESTACADO</span>
                    </div>
                    <Link to={`/movie/${item.id}`}>
                      <div className="relative h-[280px] md:h-[320px]">
                        <img src={item.poster} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                      </div>
                    </Link>
                  </div>
                  <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Desplazar destacados a la derecha"
            onClick={() => scrollFeatured(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-emerald-900/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      {/* Películas más recientes */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Películas más recientes</h2>
        </div>
        <MovieGrid movies={movies} />
      </section>

      {/* Series más recientes */}
      <section className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Series más recientes</h2>
        </div>
        <MovieGrid movies={series} />
      </section>
    </div>
  )
}