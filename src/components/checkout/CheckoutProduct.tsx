"use client";

import Image from 'next/image'
import React from 'react'
import {CartProduct as CartProductType} from '../../types/ProductType';
import { removeProduct, useAppDispatch } from '@/lib/store';
const CheckoutCartProduct = ({product, index}: {product: CartProductType, index: number}) => {
  const dispatch = useAppDispatch();
  console.log(product);
  return (
    <div className='flex w-full p-5 gap-4 shadow-lg bg-white rounded-xl border-2 border-gray-100'>
    <Image
      src={`${product.image}`}
      alt=''
      objectFit='cover'
      width={0}
      height={0}
      sizes='100vw'

      className='object-cover rounded-md w-16 h-16'
    />
    <div className='flex flex-col justify-between w-full'>
      <div className=''>
        <div className='flex items-center justify-between gap-8'>
          <h3 className='font-semibold md:text-3xl'>{product.name}</h3>
          <div className='p-1  font-bold rounded-sm md:text-3xl'>${product.price}</div>
        </div>
          <div className='w-full flex items-center justify-start py-2 gap-2'>
            <h2 className='font-bold md:text-xl'>Color:</h2>
            <div
              className={`w-5 h-5 rounded-full cursor-pointer relative`}
              style={{backgroundColor:product.color}}
            ></div>
            <h2 className='font-bold md:text-xl'>Size:</h2>
            <h3 className='font-bold md:text-xl'>{product.size}</h3>
          </div>
      </div>
      <div className='flex justify-between '>
        <span className='text-gray-500 font-bold md:text-xl'>Qty {product.amount}</span>
        <div 
          className='p-2 ring-2 border-blue-500 hover:bg-blue-400 
            rounded-xl text-blue-500 hover:text-white transition-all cursor-pointer'
          onClick={() => {
            dispatch(removeProduct(index))
          }}
        >
          <span 
            className=''
            
          >
            Remove
          </span>

        </div>
      </div>
    </div>
  </div>
  )
}

export default CheckoutCartProduct