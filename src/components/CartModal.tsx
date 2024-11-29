"use client";

import { useAppSelector } from '@/lib/store';
import Image from 'next/image';
import React  from 'react'

const CartModal = () => {

  const cart = useAppSelector(state => state.cart);

  //obviously there's going to be actual functionality
  const cartItems = Object.keys(cart).length > 0;

  return (
    <div
      className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]
      bg-white top-12 right-0 flex flex-col gap-6 z-20  '
    >
      {!cartItems ? (
        <h2 className='text-xl'>Cart Is Empty </h2>
      ) : (
        <>

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
        <div className=''>
          <div className='flex items-center justify-between font-semibold'>
            <span className=''>Subtotal</span>
            <span className=''>$49</span>
          </div>
          <p className='text-gray-500 text-sm mt-2'>
            shipping and taxes are calculated at checkout
          </p>
          <div className='flex justify-between text-sm mt-2'>
            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
            <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
          </div> 
        </div>
        </>
      )}
    </div>
  )
}

export default CartModal