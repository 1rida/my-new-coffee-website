import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-black h-auto grid grid-cols-1 sm:grid-cols-2 pt-[6rem] lg:grid-cols-4 gap-6 px-4 py-8'>
      
      {/* Card 1 */}
      <div className='text-white font-serif flex flex-col items-center'>
        <Image id='c9' src="/images/c9.webp" alt="cold coffee" width={275} height={812} className='opacity-100 cursor-pointer ease-linear m-7' />
        <h2 className='text-2xl text-orange-400 mb-2'>cold coffee</h2>
        <h3 className='text-3xl mb-4'>$100</h3>
        <button className='bg-green-600 px-7 py-2 hover:opacity-75 active:opacity-55'>order now</button>
      </div>

      {/* Card 2 */}
      <div className='text-white font-serif flex flex-col items-center'>
        <Image id='c7' src="/images/c7.jpg" alt="cartado" width={275} height={812} className='opacity-100 cursor-pointer ease-linear m-7' />
        <h2 className='text-2xl text-orange-400 mb-2'>cartado</h2>
        <h3 className='text-3xl mb-4'>$200</h3>
        <button className='bg-green-600 px-7 py-2 hover:opacity-75 active:opacity-55'>order now</button>
      </div>

      {/* Card 3 */}
      <div className='text-white font-serif flex flex-col items-center'>
        <Image id='c6' src="/images/c14.jpg" alt="latte" width={275} height={812} className='opacity-100 cursor-pointer ease-linear m-7' />
        <h2 className='text-2xl text-orange-400 mb-2'>latte</h2>
        <h3 className='text-3xl mb-4'>$300</h3>
        <button className='bg-green-600 px-7 py-2 hover:opacity-75 active:opacity-55'>order now</button>
      </div>

      {/* Card 4 */}
      <div className='text-white font-serif flex flex-col items-center'>
        <Image id='c8' src="/images/c6.jpg" alt="creamy coffee" width={275} height={812} className='opacity-100 cursor-pointer ease-linear m-7' />
        <h2 className='text-2xl text-orange-400 mb-2'>creamy coffee</h2>
        <h3 className='text-3xl mb-4'>$400</h3>
        <button className='bg-green-600 px-7 py-2 hover:opacity-75 active:opacity-55'>order now</button>
      </div>

      {/* Card 5 */}
      <div className='text-white font-serif flex flex-col items-center'>
        <Image id='c10' src="/images/c10.jpg" alt="black coffee" width={275} height={812} className='opacity-100 cursor-pointer ease-linear m-7' />
        <h2 className='text-2xl text-orange-400 mb-2'>black coffee</h2>
        <h3 className='text-3xl mb-4'>$500</h3>
        <button className='bg-green-600 px-7 py-2 hover:opacity-75 active:opacity-55'>order now</button>
      </div>

      {/* Card 6 */}
      <div className='text-white font-serif flex flex-col items-center'>
        <Image id='c11' src="/images/c11.jpg" alt="nescafe" width={275} height={812} className='opacity-100 cursor-pointer ease-linear m-7' />
        <h2 className='text-2xl text-orange-400 mb-2'>nescafe</h2>
        <h3 className='text-3xl mb-4'>$600</h3>
        <button className='bg-green-600 px-7 py-2 hover:opacity-75 active:opacity-55'>order now</button>
      </div>

      {/* Card 7 */}
      <div className='text-white font-serif flex flex-col items-center'>
        <Image id='c12' src="/images/c12.jpg" alt="brown coffee" width={275} height={812} className='opacity-100 cursor-pointer ease-linear m-7' />
        <h2 className='text-2xl text-orange-400 mb-2'>brown coffee</h2>
        <h3 className='text-3xl mb-4'>$700</h3>
        <button className='bg-green-600 px-7 py-2 hover:opacity-75 active:opacity-55'>order now</button>
      </div>

      {/* Card 8 */}
      <div className='text-white font-serif flex flex-col items-center'>
        <Image id='c8' src="/images/c8.jpg" alt="cappuccino" width={275} height={812} className='opacity-100 cursor-pointer ease-linear m-7' />
        <h2 className='text-2xl text-orange-400 mb-2'>cappuccino</h2>
        <h3 className='text-3xl mb-4'>$800</h3>
        <button className='bg-green-600 px-7 py-2 hover:opacity-75 active:opacity-55'>order now</button>
      </div>

    </div>
  )
}

export default page
