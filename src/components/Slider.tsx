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
import React from 'react'

const Slider = () => {
  return (
    <div>Slider</div>
  )
}

export default Slider