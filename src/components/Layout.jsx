import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="pt-20 max-w-6xl mx-auto px-4">
        {children}
        <footer className="mt-10 text-center text-sm text-gray-500">
          Tomatoes · Diseño oscuro elegante · © 2025
        </footer>
      </div>
    </div>
  );
}