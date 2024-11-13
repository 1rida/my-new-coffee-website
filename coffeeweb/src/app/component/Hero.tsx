import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative'>
      {/* Background image with full height */}
      <div className='absolute inset-0 z-[-1]'>
        <Image 
          src="/images/c1.jpg" 
          alt="img" 
          width={1600} 
          height={900} 
          className="object-cover w-full h-screen" 
        />
      </div>

      {/* Text Content */}
      <div className='text-zinc-50 pt-[120px] md:pt-[140px] px-6 sm:px-8'>
        {/* Title */}
        <h1 className='mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-500 font-serif'>
          <i>COFFEE IN WINTER</i>
        </h1>

        {/* Description */}
        <p className='mt-6 text-base sm:text-lg md:text-xl font-bold text-center md:text-left'>
          Welcome to our coffee shop, where every cup tells a story. We source the finest beans from sustainable farms around the world, ensuring each sip is rich in flavor and aroma. Whether you are a casual drinker or a coffee connoisseur, our carefully curated selection promises to elevate your coffee experience. Join us on a journey of taste and discovery—explore our blends, learn about our origins, and brew your perfect cup today!
        </p>

        {/* Button */}
        <div className='flex justify-center md:justify-start mt-6'>
          <button 
            id='btn' 
            className='bg-orange-500 text-black font-serif px-8 py-2 rounded-md mt-6 hover:bg-orange-600 transition duration-300'>
            <Link href="/about">VISIT</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
