"use client";

import Image from 'next/image';
import React  from 'react'

const CartModal = () => {

  //obviously there's going to be actual functionality
  const cartItems = true;

  return (
    <div
      className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]
      bg-white top-12 right-0 flex flex-col gap-6 z-20  '
    >
      {!cartItems ? (
        <div>
          Cart is Empty
        </div>
      ) : (
        <div className='flex flex-col gap-8'>
          <div className='flex gap-4'>
            <Image
              src="https://i.imgur.com/GRz3dtd.png"
              alt=''
              width={72}
              height={92}
              className='object-cover rounded-md'
            />
            <div className='flex flex-col justify-between w-full'>
              <div className=''>
                <div className='flex items-center justify-between gap-8'>
                  <h3 className='font-semibold'>Product Name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                </div>
                <div className='text-sm text-gray-500'>
                  available 
                </div>
              </div>
              <div className='flex justify-between  '>
                <span className='text-gray-500'>Qty .2</span>
                <span className='text-blue-500  '>Remove</span>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <Image
              src="https://i.imgur.com/GRz3dtd.png"
              alt=''
              width={72}
              height={92}
              className='object-cover rounded-md'
            />
            <div className='flex flex-col justify-between w-full'>
              <div className=''>
                <div className='flex items-center justify-between gap-8'>
                  <h3 className='font-semibold'>Product Name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                </div>
                <div className='text-sm text-gray-500'>
                  available 
                </div>
              </div>
              <div className='flex justify-between  '>
                <span className='text-gray-500'>Qty .2</span>
                <span className='text-blue-500  '>Remove</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartModal