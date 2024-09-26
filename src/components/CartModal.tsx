"use client";

import Image from 'next/image';
import React  from 'react'

const CartModal = () => {

  //obviously there's going to be actual functionality
  const cartItems = true;

  return (
    <div
      className='absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]
      bg-white top-12 right-0 flex flex-col gap-6 z-20  '
    >
      {!cartItems ? (
        <div>
          Cart is Empty
        </div>
      ) : (
        <div>
          <Image
            src="https://i.imgur.com/GRz3dtd.png"
            alt=''
            width={72}
            height={92}
            className='object-cover rounded-md'
          />
          <div className=''>
            <div className=''>
              <div className=''>
                <h3>Product Name</h3>
                <div className=''>$49</div>
              </div>
              <div className=''>
                available 
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default CartModal