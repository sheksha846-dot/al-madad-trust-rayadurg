import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex items-center justify-between">
        <div>© {new Date().getFullYear()} Al Madad Trust Rayadurg</div>
        <div>Built with ❤️ for the community</div>
      </div>
    </footer>
  )
}
