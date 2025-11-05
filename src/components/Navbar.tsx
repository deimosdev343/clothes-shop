'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import LogoIcon from '../assets/Logo.png';
import Image from 'next/image';
import Searchbar from './Searchbar';
import NavIcons from './NavIcons';
import { useAppDispatch, useAppSelector } from '@/lib/store';
const Navbar = () => {
  const cart = useAppSelector(state => state.cart);

  const getCartAmount = ()  => {
    let amount = 0;
    
    cart.forEach((prd) => {
      amount += prd.amount;
    })
    return amount;
  }
  const currAmount = getCartAmount();
  return (
    <div className='h-20 px-4 lg:px-16 xl:32 2xl:px-64 relative  shadow-lg border-gray-200 '>
      <div className='flex items-center justify-between md:hidden'>
        <Link href='/'>
          <div className='text-2xl font-extrabold'>Cloths Shop</div>
        </Link>
        <Menu cartAmount={currAmount}/>
      </div>
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        <div className='w-1/3 xl:1/2 flex items-center'>
          <Link href='/' className='relative flex items-center'>
            <div className='text-2xl font-extrabold'>Cloths Shop</div>
            <Image
              src={LogoIcon}
              alt=''
              className='w-[15%] h-[15%]'
            />        
          </Link>
          
        </div>
        <div className='w-full flex items-center justify-between gap-8 '>
          {/* <Searchbar/> */}
          {/* Search bar at the top kinda makes no sense actually */}
          <NavIcons/>
        </div>
      </div>
    </div>
  )
}

export default Navbar