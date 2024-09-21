"use client";

import React, { useState } from 'react'
import MenuIcon from '../assets/list.png';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  const [open, setOpen] = useState(false);            
  return (
    <div className='m-2       '>
      <Image
        src={MenuIcon}
        className='cursor-pointer'
        width={28}
        height={28}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className='absolute bg-black text-white left-0 top-20 text-xl 
          w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8'
        >
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  )
}

export default Menu