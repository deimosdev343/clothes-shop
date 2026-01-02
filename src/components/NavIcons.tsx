"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import BellIcon from '../assets/bell.png';
import ProfileIcon from '../assets/profile-user.png';
import CartIcon from '../assets/shopping-cart.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';
import { addProduct, useAppDispatch, useAppSelector } from '@/lib/store';
import {motion} from 'framer-motion';
import UpArrowIcon from '../assets/arrowRedUp.png';



const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cart = useAppSelector(state => state.cart);
  const anim = useAppSelector(state=> state.anim);

  const dispatch = useAppDispatch();
  const getCartAmount =  () => {
    let amount = 0;
    
    cart.forEach((prod) => {
      amount += prod.amount;
    })
    return amount;
  } 

  const router = useRouter();

  return <div className='flex items-center gap-4 xl:gap-6 relative'>  
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
        onClick={() =>{ 
          setIsCartOpen(prev => !prev);
        }}
      />
      
      <div 
        className='absolute -top-4 -right-4 w-6 h-6 bg-[#f35c7a]
          rounded-full text-white text-sm flex items-center justify-center '
       
      >
        {getCartAmount()}
      </div>
      {isCartOpen && (
        <CartModal  setCartOpen={setIsCartOpen}/>
      )}
      {anim.animation == "addToCheckout" && 
        <motion.div
          
          className="absolute top-[400%] left-[50%] w-64 "
          initial={{  y: "-50%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        > 
          <Image
            src={UpArrowIcon}
            alt=''
            
            width={50}
            height={50}
          />
        </motion.div>
      }
    </div>
  
}

export default NavIcons