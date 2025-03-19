import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container-custom h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MemeGen
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/templates" className="text-gray-600 hover:text-blue-600">
            Templates
          </Link>
          <Link href="/trending" className="text-gray-600 hover:text-blue-600">
            Trending
          </Link>
          <Link href="/create" className="btn-primary">
            Create Meme
          </Link>
        </div>

        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
} 