"use client";

//gonna put fake data here
//this will later be connected to the api to fetch real promos

const slides = [
  {
    id:1,
    title:"Summer sale Collection",
    description: "Sale! Up to 50% off!",
      img:"https://i.imgur.com/1uMluMJ.png",
    url:"/",
    bg:"bg-gradient-to-r from-yellow-50 to-pink-50"
  },
  {
    id:2, 
    title:"Winter Sale Collection",
    description: "Sale! Up to 50% off!",
    img:"https://i.imgur.com/1uMluMJ.png",
    url:"/",
    bg:"bg-gradient-to-r from-pink-50 to-blue-50"
  },
  {
    id:3,
    title:"Spring Sale Collection",
    img:"https://i.imgur.com/1uMluMJ.png",
    url:"/",
    bg:"bg-gradient-to-r  from-blue-50 to-yellow-50"
  }
];

import { DiscountType } from '@/types/DiscountType';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const inter = setInterval(() => {
      setCurrent(current => {
       return current+1;
      })
    },7000)
    return () => {
      clearInterval(inter);
    }
  }, []);


  const fetchDiscounts = async () => {
    try {
      const discountRes = await axios.get(`/api/discounts`);
      console.log(discountRes)
      setDiscounts(discountRes.data.discounts);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchDiscounts();
    const inter = setInterval(() => {
      fetchDiscounts();
    }, 10000)
    return () => {
      clearInterval(inter);
    }
  }, []);

  const [discounts, setDiscounts] = useState<Array<DiscountType>>([]);
  console.log(discounts)
  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div 
        className='w-max h-full flex transition-all ease-in-out duration-1000'
        style={{transform:`translateX(-${(current % discounts.length) *100}vw)`}}  
      >
        {discounts.map(slide => <div className={`${slide.background} bg-gradient-to-r w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide._id}>
          
          <div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
            <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
            <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.description}</h1>
            
            <button className='rounded-md bg-black text-white py-3 px-4'>
              SHOP NOW
            </button>
            
          </div>
          <div className='w-full h-1/2 xl:w-1/2 relative xl:h-full'>
            <Image
              src={slide.image}
              alt=''
              fill  
              sizes='100%'
              className='object-contain'
            />
          </div>
        </div>)}
      </div>
      <div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
        {
          discounts.map((slide, index) => (
            <div 
              key={slide._id}
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600
                cursor-pointer flex items-center justify-center ${current % discounts.length === index ? "scale-150" : ""}`}
              onClick={() => {
                setCurrent(index);
              }}
            >
              {current % discounts.length === index && 
                <div   className='w-[6px] h-[6px] bg-gray-600 rounded-full'>
                </div>
              }
            </div>
          ))
        }      
      </div>
    </div>
  )
}

export default Slider;