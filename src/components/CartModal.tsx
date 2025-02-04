"use client";

import { useAppSelector } from '@/lib/store';
import Image from 'next/image';
import React  from 'react'
import CartProduct from './Product/CartProduct';
import Link from 'next/link';

const CartModal = () => {

  const cart = useAppSelector(state => state.cart);
  //obviously there's going to be actual functionality
  const cartItems = Object.keys(cart).length > 0;
  const getCartTotalPrice = ()  => {
    let price = 0;
    cart.forEach((prod) => {
      price += prod.amount * prod.price;
    })
    return price;
  }
  const currAmount = getCartTotalPrice();
  return (
    <div
      className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]
      bg-white top-12 right-0 flex flex-col gap-6 z-20  overflow-scroll'
    >
      {!cartItems ? (
        <h2 className='text-xl'>Cart Is Empty </h2>
      ) : (
        <>
        <div className='flex flex-col gap-8 max-h-[45vh] overflow-scroll'>
         {(cart).map((prod, index) => <CartProduct product={prod} index={index}  key={index}/>)}
        </div>
        <div className=''>
          <div className='flex items-center justify-between font-semibold'>
            <span className=''>Subtotal</span>
            <span className=''>${currAmount.toFixed(2)}</span>
          </div>
          <p className='text-gray-500 text-sm mt-2'>
            shipping and taxes are calculated at checkout
          </p>
          <div className='flex justify-between text-sm mt-2'>
            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
            <Link href={`/checkout`}>
              <button className='rounded-md py-3 px-4 bg-black text-white'>
                Checkout
              </button>
            </Link>
          </div> 
        </div>
        </>
      )}
    </div>
  )
}

export default CartModal