import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meme Generator - Create, Share, and Customize Memes Online',
  description: 'Create custom memes with our easy-to-use online meme generator. Choose from thousands of templates, add your text, and share your memes instantly. Free, fast, and fun!',
  keywords: 'meme generator, meme maker, create memes, custom memes, online meme tool, meme templates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 