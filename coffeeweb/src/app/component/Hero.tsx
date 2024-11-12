import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div >
      
     <div className='absolute z-[-1] '>
      <Image id='ima' className='h-screen overflow-hidden ' src={"/images/c1.jpg"} alt='img' width={1600} height={400}/>


      </div>
      <div className='flex text-zinc-50 pt-[150px]'>
      <div> 
      <h1 className='mt-[70px] ml-3 absolute text-amber-500  text-[40px] font-serif '><i>COFFEE IN WINTER</i></h1></div> 

      <p className='flex justify-center items-center ml-3 mt-[150px]  font-bold'>Welcome to our coffee shop, where every cup tells a story. We source the <br /> finest  beans from sustainable farms around the world, ensuring each <br /> sip is rich in flavor and aroma. Whether your a casual drinker or <br /> a coffee connoisseur, our carefully curated selection <br /> promises to elevate your coffee experience. Join us on a journey <br /> of taste and discovery—explore our blends, <br /> learn about our origins, and brew your perfect cup today!</p>

      </div>
      <button id='btn' className='bg-orange-500 text-black ml-4 mt-5 font-serif'><Link href="/about">VISIT</Link></button>

      
      
    </div>
  )
}

export default Hero