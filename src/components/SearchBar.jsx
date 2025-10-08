import React, { useState, useEffect } from 'react'
import { movies as mock } from '../utils/mockMovies'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function SearchBar(){
  const [q,setQ] = useState('')
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if(!q) return setResults([])
    const r = mock.filter(m => m.title.toLowerCase().includes(q.toLowerCase()))
    setResults(r.slice(0,5))
  }, [q])

  function handleKeyDown(e){
    if(e.key === 'ArrowDown'){
      e.preventDefault()
      const first = document.querySelector('[data-suggest-item="true"]')
      if(first) first.focus()
    }
  }

  return (
    <div className="relative" role="search">
      <label htmlFor="movie-search" className="sr-only">Buscar películas</label>
      <input
        id="movie-search"
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar películas..."
        aria-autocomplete="list"
        aria-expanded={results.length>0}
        aria-controls="search-suggestions"
        className="w-full rounded-md px-4 py-2 bg-[#F5F7F9] border border-gray-300 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <AnimatePresence>
        {results.length>0 && (
          <motion.ul id="search-suggestions" role="listbox" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:6}} className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md overflow-hidden z-50 shadow-lg">
            {results.map((r) => (
              <li
                key={r.id}
                role="option"
                tabIndex={0}
                aria-selected={false}
                data-suggest-item="true"
                onKeyDown={(e) => {
                  if(e.key === 'Enter'){ navigate(`/movie/${r.id}`); setQ(''); setResults([]) }
                  if(e.key === 'ArrowDown'){ e.preventDefault(); e.currentTarget.nextElementSibling?.focus() }
                  if(e.key === 'ArrowUp'){ e.preventDefault(); (e.currentTarget.previousElementSibling)?.focus() || document.getElementById('movie-search')?.focus() }
                }}
                onClick={() => { navigate(`/movie/${r.id}`); setQ(''); setResults([]) }}
                className="px-3 py-2 hover:bg-white/2 cursor-pointer flex items-center gap-3"
              >
                <img src={r.poster} alt={r.title} loading="lazy" className="w-10 h-14 object-cover rounded"/>
                <div>
                  <div className="font-medium text-gray-900">{r.title}</div>
                  <div className="text-xs text-gray-500">{r.year} · {r.genre.join(', ')}</div>
                </div>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}