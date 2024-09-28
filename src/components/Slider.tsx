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
    bg:"bg-gradiant-to-r from-yellow-50 to-pink-50"
  },
  {
    id:2, 
    title:"Winter Sale Collection",
    description: "Sale! Up to 50% off!",
    img:"https://i.imgur.com/1uMluMJ.png",
    url:"/",
    bg:"bg-gradiant-to-r from-pink-50 to-blue-50"
  },
  {
    id:3,
    title:"Spring Sale Collection",
    img:"https://i.imgur.com/1uMluMJ.png",
    url:"/",
    bg:"bg-gradiant-to-r from-blue-50 to-yellow-50"
  }
];


import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div className='w-max h-full flex transition-all ease-in-out duration-1000'>
        {slides.map(slide => <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
          <div className='h-1/2 xl:w-1/2'>
            <h2>{slide.description}</h2>
            <h1>{slide.title}</h1>
            <Link href={slide.url}>
              <button>
                SHOP NOW
              </button>
            </Link>
          </div>
          <div className=' w-1/2 relative'>
            <Image
              src="https://i.imgur.com/1uMluMJ.png"
              alt=''
              fill  
              sizes='100%'
              className='object-cover'
            />
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Slider