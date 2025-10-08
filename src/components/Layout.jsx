import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center p-6">
        <div className="w-full max-w-6xl">
          <Outlet />
        </div>
      </main>
      <footer className="text-center text-sm text-emerald-300/80 py-6">Tomatoes · Diseño verde elegante · © {new Date().getFullYear()}</footer>
    </div>
  )
}