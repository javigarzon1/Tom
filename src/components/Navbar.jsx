import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Navbar(){
  const navigate = useNavigate()
  return (
    <nav className="w-full border-b border-white/5 bg-gradient-to-b from-transparent to-transparent fixed top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-tomato to-red-600 flex items-center justify-center text-white font-bold">🍅</div>
          <span className="font-semibold tracking-tight">Tomatoes</span>
        </Link>

        <div className="flex-1">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/favorites" className="text-sm text-gray-300 hover:text-white">Favoritos</Link>
          <button onClick={() => navigate('/')} className="px-3 py-2 rounded-md text-sm border border-white/6 hover:bg-white/2">Inicio</button>
          <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">U</div>
        </div>
      </div>
    </nav>
  )
}