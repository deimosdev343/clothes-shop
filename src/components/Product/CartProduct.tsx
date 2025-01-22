"use client";

import Image from 'next/image'
import React from 'react'
import {CartProduct as CartProductType} from '../../types/ProductType';
import { removeProduct, useAppDispatch } from '@/lib/store';
const CartProduct = ({product, index}: {product: CartProductType, index: number}) => {
  const dispatch = useAppDispatch();
  console.log(product);
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
          <h3 className='font-semibold text-xl'>{product.title}</h3>
          <div className='p-1 bg-gray-50 rounded-sm'>${product.price}</div>
        </div>
          <div className='w-full flex items-center justify-start py-2 gap-2'>
            <h2 className='font-bold'>Color:</h2>
            <div
              className={`w-4 h-4 rounded-full cursor-pointer relative`}
              style={{backgroundColor:product.color}}
            ></div>
            <h2 className='font-bold'>Size:</h2>
            <h3 className='font-semibold'>{product.size}</h3>
          </div>
      </div>
      <div className='flex justify-between '>
        <span className='text-gray-500'>Qty {product.amount}</span>
        <span 
          className='text-blue-500 hover:text-blue-400 transition-all cursor-pointer'
          onClick={() => {
            dispatch(removeProduct(index))
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