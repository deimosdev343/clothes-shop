"use client";
import { CaclculatedOrderType } from '@/types/CalaculatedOrderType';
import Image from 'next/image'

import React from 'react'


const CheckoutDiscount = ({discount}:{discount: CaclculatedOrderType}) => {
  
  return (
    <div className='p-5  w-[80%] flex items-center justify-between rounded-lg border-2 border-red-400 bg-red-50'>
      <p className='font-bold'>{discount.name}</p>
      <p className='font-bold'>({discount.price?.toFixed(2)})</p>
    </div>
  )
}

export default CheckoutDiscount