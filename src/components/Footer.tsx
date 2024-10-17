import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex justify-between gap-24'>
        <div className='w-1/4 flex flex-col gap-8'>
          <Link href='/'>
            <div className='text-2xl font-extrabold'>Cloths Shop</div>
          </Link>
          
          <p>
            3252 Winslow Way NW OR 97304, United States
          </p>
          <span>Vasyan@VasyankaMasters.org</span>
          <span>+972 54 7252158</span>
          <div className='flex gap-6'>

          </div>
        </div>
        <div className='w-1/2'>

        </div>
        <div className='w-1/4'>

        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer