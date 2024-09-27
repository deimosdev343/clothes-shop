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
    id:1, 
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
import React, { useState } from 'react'

const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className='h-[calc(100vh-80px) overflow-hidden]'>
      <div className='w-max h-full flex transition-all ease-in-out duration-1000'>
        {slides.map(slide => <div className='' key={slide.id}>
          <div className=''></div>
          <div className=''></div>

        </div>)}
      </div>
    </div>
  )
}

export default Slider