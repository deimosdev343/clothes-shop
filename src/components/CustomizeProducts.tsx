"use client";

import { useState } from "react";


export const CustomizeProducts = ({colors, sizes} : {colors: Array<string>, sizes: Array<string>}) => {
  const [index, setIndex] = useState({
    colorIndex:0,
    sizeIndex:0
  })
  
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantity = (type: "i" | "d") => {
    if(type === "d" && quantity > 1) {
      return setQuantity((prev) => prev-1);
    }
    if(type === "i") {
      return setQuantity((prev) => prev+1); 
    } 
  }
  return (
    <>
      <div className="flex flex-col gap-6">
        <h4 className="font-medium">Choose a color</h4>
        <ul className="flex items-center gap-5">
          {/*This is how we are going to do the color select, not too bad*/}
          {colors.map((clr, i) => <li
            className={`w-8 h-8 rounded-full ring-2 ${i !== index.colorIndex ? "ring-gray-300" : "ring-blue-800"} 
              cursor-pointer relative`}
            style={{
              backgroundColor:clr
            }}
            onClick={() => {
              setIndex(ind => ({...ind, colorIndex: i}))
            }}
          >
            {i === index.colorIndex && <div className="absolute w-10 h-10 rounded-full ring-2 
              top-[-10%] left-1/2 transform -translate-x-1/2 -tranlsate-y-1/2"/>}
          </li>)}
        
        </ul>
        <h4 className="font-medium">Choose a size</h4>
        <ul className="flex items-center gap-3">
          {
            sizes.map((s, i) =>
              <li 
                onClick={() => {
                  setIndex(ind => ({...ind, sizeIndex: i}))
                }}
                  className={ i === index.sizeIndex ?
                    "ring-1 ring-redPrim text-redPrim rounded-md py-1 px-4 text-sm cursor-pointer" :
                    "ring-1 ring-white text-white bg-redPrim rounded-md py-1 px-4 text-sm cursor-pointer" 
                  }
              >
                {s}
              </li> 
          )}
        
        </ul>
      </div>
      <div className="h-[2px] bg-gray-100"></div>
      <div className='flex flex-col gap-4'>
        <h4 className='font-medium'>Choose a Quantity</h4>
        <div className='flex items-center gap-4 justify-between'>
          <div className='bg-gray-100 flex py-2 px-4 rounded-3xl items-center justify-between w-[20%]'>
            <button className='cursor-pointer text-xl' onClick={() => handleQuantity("d")}>-</button>
            <div className=''>{quantity}</div>
            <button className='cursor-pointer text-xl' onClick={() => handleQuantity("i")}>+</button>
          </div>
          <button className='w-36 text-sm rounded-3xl ring-1 ring-redPrim text-redPrim py-2 px-4 hover:bg-redPrim hover:text-white'>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  )
}