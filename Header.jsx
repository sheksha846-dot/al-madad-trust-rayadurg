import React from 'react'

export default function Header(){ 
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <h1 className="text-lg font-bold">Al Madad Trust</h1>
            <div className="text-xs">Rayadurg</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#donate" className="ml-2 px-3 py-1 rounded bg-white text-green-700">Donate</a>
        </nav>
      </div>
    </header>
  )
}
