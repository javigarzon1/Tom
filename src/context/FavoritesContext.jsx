import React, { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }){
  const [favorites, setFavorites] = useState(() => {
    try{
      const raw = localStorage.getItem('tomatoes:favorites')
      return raw ? JSON.parse(raw) : []
    }catch{ return [] }
  })

  useEffect(() => {
    try{ localStorage.setItem('tomatoes:favorites', JSON.stringify(favorites)) }catch{}
  }, [favorites])

  function toggleFavorite(movie){
    setFavorites(prev => {
      const exists = prev.find(m => m.id === movie.id)
      if(exists) return prev.filter(m => m.id !== movie.id)
      return [movie, ...prev]
    })
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites(){
  return useContext(FavoritesContext)
}