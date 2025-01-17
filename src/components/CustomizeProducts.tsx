"use client";

import { useState } from "react";


export const CustomizeProducts = ({colors, sizes} : {colors: Array<string>, sizes: Array<string>}) => {
  const [colorIndex, setColorIndex] = useState(0);
  
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-5">
        {/*This is how we are going to do the color select, not too bad*/}
        {colors.map(clr => <li
          className={`w-8 h-8 rounded-full ring-1 ring-gray-300 
            cursor-pointer relative`}
          style={{
            backgroundColor:clr
          }} 
        >
          <div className="absolute w-10 h-10 rounded-full ring-2 
            top-[-10%] left-1/2 transform -translate-x-1/2 -tranlsate-y-1/2"/>
        </li>)}
       
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-redPrim text-redPrim rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-redPrim text-white bg-redPrim rounded-md py-1 px-4 text-sm cursor-pointer">
          Meduim
        </li>
        <li className="ring-1 ring-redPrim text-redPrim rounded-md py-1 px-4 text-sm cursor-pointer">
          Large
        </li>
      </ul>
    </div>
  )
}