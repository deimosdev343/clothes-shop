"use client";

import { useAppSelector } from '@/lib/store'
import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';
import UpArrowIcon from '../../assets/arrowRedUp.png';
const AnmationWrapper = ({children} :{children: React.ReactNode}) => {
  const anim = useAppSelector(state=> state.anim);

  return (
    <div className='w-full h-screen'>
      {anim.animation == "addToCheckout" && 
        <motion.div
          
          className="absolute top-[15%] left-[93.2%] w-64 "
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
      {children}
    </div>
  )
}

export default AnmationWrapper