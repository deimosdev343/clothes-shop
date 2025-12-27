"use client";
import { CaclculatedOrderType } from '@/types/CalaculatedOrderType';
import Image from 'next/image'

import React from 'react'


const CheckoutDiscount = ({discount}:{discount: CaclculatedOrderType}) => {
  
  return (
    <div className='flex items-center justify-between rounded-lg border-2 border-red-400 bg-red-50'>
      <p>{discount.name}</p>
      <p>{discount.price}</p>
    </div>
  )
}

export default CheckoutDiscount