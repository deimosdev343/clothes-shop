import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gray-100 text-sm mt-24'>
      <div className='flex justify-between gap-24'>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href='/'>
            <div className='text-2xl font-extrabold'>Cloths Shop</div>
          </Link>
          
          <p>
            3252 Winslow Way NW OR 97304, United States
          </p>
          <span className='font-semibold'>Vasyan@VasyankaMasters.org</span>
          <span className='font-semibold'>+972 54 7252158</span>
          <div className='flex gap-6'>
            <Image src='/facebook.png' alt="" width={16} height={16} />
            <Image src='/instagram.png' alt="" width={16} height={16} />
            <Image src='/youtube.png' alt="" width={16} height={16} />
            <Image src='/pinterest.png' alt="" width={16} height={16} />
            <Image src='/x.png' alt="" width={16} height={16} />
          </div>
        </div>
        <div className='hidden lg:flex justify-between w-1/2'>

        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>be the first to get latest news about trends, promotions, and much more!</p>
          <div className='flex'>
            <input
              type="text"
              placeholder='Email address'
              className='p-4 w-3/4'
            />
            <button className='w-1/4 bg-redPrim text-white'>JOIN</button>
            <span className='font-semibold'>Secure Payment</span>
            <div className='flex justify-between'>
              <Image src='/discover.png' alt='' width={16} height={16}/>
              <Image src='/skrill.png' alt='' width={16} height={16}/>
              <Image src='/paypal.png' alt='' width={16} height={16}/>
              <Image src='/mastercard.png' alt='' width={16} height={16}/>
              <Image src='/visa.png' alt='' width={16} height={16}/>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer