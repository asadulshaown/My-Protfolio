
import React from 'react'

const HeroSection = () => {
  return (

  <section class="min-h-screen flex items-center justify-center px-6">
    <div class="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
      
       {/* Text Content  */}
      <div class="space-y-6">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          Build Your Dream Product
          with <span class="text-blue-600">Speed & Style</span>
        </h1>
        <p class="text-lg text-gray-600">
          We help startups and businesses create scalable, modern, and user-friendly applications.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Get Started
          </a>
          <a href="" class="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
            Learn More
          </a>
        </div>
      </div>

       {/* Hero Image  */}
      <div class="flex justify-center">
        <img src="/Images/profile2.jpg" alt="Hero Image" class="rounded-2xl shadow-lg" />
      </div>

    </div>
  </section> 
  )
}

export default HeroSection