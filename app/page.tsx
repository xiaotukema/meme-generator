import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Create Amazing Memes in Seconds with Our Online Meme Generator
              </h1>
              <p className="text-lg mb-8">
                Transform your ideas into viral memes with our easy-to-use meme generator. Choose from thousands of templates, add your text, and share your creations instantly.
              </p>
              <Link href="/create" className="btn-primary">
                Start Creating Memes
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/hero-meme.png"
                alt="Meme Generator Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Meme Generator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p>Create and download memes in seconds with our intuitive interface.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Endless Templates</h3>
              <p>Access thousands of trending and classic meme templates.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-semibold mb-3">Custom Tools</h3>
              <p>Customize fonts, colors, and add special effects to make your memes unique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Templates Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Meme Templates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Template placeholders */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg hover:opacity-75 transition-opacity cursor-pointer">
                {/* Template preview images will go here */}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/templates" className="btn-secondary">
              View All Templates
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Create a Meme
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Choose Template</h3>
              <p>Select from our vast collection of meme templates or upload your own image.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Add Your Text</h3>
              <p>Customize your meme with text, choose fonts, colors, and add effects.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Download & Share</h3>
              <p>Save your meme and share it with friends on social media.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your First Meme?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join millions of creators who use our meme generator to bring their ideas to life. No sign-up required!
          </p>
          <Link href="/create" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Start Creating Now
          </Link>
        </div>
      </section>
    </main>
  )
} 