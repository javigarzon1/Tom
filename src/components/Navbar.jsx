import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Navbar(){
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll(){ setScrolled(window.scrollY > 4) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${scrolled ? 'bg-[#0E2E1A]/95 shadow-md' : 'bg-transparent'} w-full border-b border-emerald-900/30 fixed top-0 z-30 transition-colors`}>
      <div className="w-full px-4 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="MOVIEW" className="w-10 h-10 rounded-md object-cover border border-emerald-700/50 bg-[#0B2215]" />
          <span className="font-semibold tracking-tight">MOVIEW</span>
        </Link>

        <div className="flex-1">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <NavLink
            to="/favorites"
            className={({ isActive }) => `text-sm ${isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-white'}`}
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Favoritos
          </NavLink>
          <button onClick={() => navigate('/')} className="px-3 py-2 rounded-md text-sm border border-emerald-700 hover:bg-white/2">Inicio</button>
          <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">U</div>
        </div>
      </div>
    </nav>
  )
}