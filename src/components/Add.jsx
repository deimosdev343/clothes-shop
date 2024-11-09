"use client";

import React, { useState } from 'react'

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className='flex items-center gap-4 justify-between'>
        <div className='bg-gray-100 flex py-2 px-4 rounded-3xl items-center justify-between w-[20%]'>
          <button className='cursor-pointer text-xl'>-</button>
          <div className=''></div>
          <button className='cursor-pointer text-xl'>+</button>
        </div>
        <button className='w-36 text-sm rounded-3xl ring-1 ring-redPrim text-redPrim py-2 px-4 hover:bg-redPrim hover:text-white'>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Add