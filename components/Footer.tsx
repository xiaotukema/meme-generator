import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">MemeGen</h3>
            <p className="text-sm">
              The fastest and easiest way to create, customize, and share memes online.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/templates" className="text-sm hover:text-white">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/trending" className="text-sm hover:text-white">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-sm hover:text-white">
                  Create Meme
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-sm hover:text-white">
                  API
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="text-sm hover:text-white">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} MemeGen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 