"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import BellIcon from '../assets/bell.png';
import ProfileIcon from '../assets/profile-user.png';
import CartIcon from '../assets/shopping-cart.png';



const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
    
  return <div className='flex items-center gap-4 xl:gap-6'>
      <Image
        src={ProfileIcon}
        alt=""
        width={22}
        height={22}
        className='cursor-pointer'
      />
      <Image
        src={BellIcon}
        alt=""
        width={22}
        height={22}
        className='cursor-pointer'
      />
      <Image
        src={CartIcon}
        alt=""
        width={22}
        height={22}
        className='cursor-pointer'
      />

    </div>
  
}

export default NavIcons