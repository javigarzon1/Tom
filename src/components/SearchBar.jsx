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

  return (
    <div className="relative">
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Buscar películas..."
        className="w-full rounded-md px-4 py-2 bg-[#0E0E0E] border border-white/6 placeholder:text-gray-500"
      />

      <AnimatePresence>
        {results.length>0 && (
          <motion.ul initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:6}} className="absolute left-0 right-0 mt-2 bg-[#141414] border border-white/6 rounded-md overflow-hidden z-50">
            {results.map(r => (
              <li key={r.id} onClick={() => { navigate(`/movie/${r.id}`); setQ(''); setResults([]) }} className="px-3 py-2 hover:bg-white/2 cursor-pointer flex items-center gap-3">
                <img src={r.poster} alt={r.title} className="w-10 h-14 object-cover rounded"/>
                <div>
                  <div className="font-medium">{r.title}</div>
                  <div className="text-xs text-gray-400">{r.year} · {r.genre.join(', ')}</div>
                </div>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}