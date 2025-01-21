"use client";

import Image from 'next/image'
import React from 'react'
import {CartProduct as CartProductType, Product} from '../../types/ProductType';
import { removeProduct, useAppDispatch } from '@/lib/store';
const CartProduct = ({product}: {product: CartProductType}) => {
  const dispatch = useAppDispatch();
  return (
    <div className='flex gap-4'>
    <Image
      src={`${product.image}`}
      alt=''
      width={72}
      height={92}
      className='object-cover rounded-md'
    />
    <div className='flex flex-col justify-between w-full'>
      <div className=''>
        <div className='flex items-center justify-between gap-8'>
          <h3 className='font-semibold'>{product.title}</h3>
          <div className='p-1 bg-gray-50 rounded-sm'>${product.price}</div>
        </div>
        <div className='text-sm text-gray-500'>
          available 
        </div>
      </div>
      <div className='flex justify-between  '>
        <span className='text-gray-500'>Qty {product.amount}</span>
        <span 
          className='text-blue-500 hover:text-blue-400 transition-all cursor-pointer'
          onClick={() => {
            dispatch(removeProduct(product.id))
          }}
        >
          Remove
        </span>
      </div>
    </div>
  </div>
  )
}

export default CartProduct