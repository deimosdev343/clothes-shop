"use client";

import { useAppSelector } from '@/lib/store'
import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';

const AnmationWrapper = ({children} :{children: React.ReactNode}) => {
  const anim = useAppSelector(state=> state.anim);

  return (
    <>
      {anim.animation == "addToCheckout" && 
        <motion.div
          initial={{opacity:0, x:"50%", y:"50%"}}
          animate={{opacity:1, x:"0%", y:"0%"}}
        >
          <Image
            src={anim.itemImage}
            alt=''
            className='w-20 h-20'
          />
        </motion.div>
      }
      {children}
    </>
  )
}

export default AnmationWrapper