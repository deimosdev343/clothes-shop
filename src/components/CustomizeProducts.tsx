"use client";

import { addProduct, setAnimation, stopAnimation, useAppDispatch, useAppSelector } from "@/lib/store";
import { Product } from "@/types/ProductType";
import { useState } from "react";
import {motion} from 'framer-motion'

export const CustomizeProducts = ({product} : {product: Product}) => {
  console.log(product)
  const [index, setIndex] = useState({
    colorIndex:0,
    sizeIndex:0
  })

  const [addButtonDisabled, setAddButtonDisabled] = useState<boolean>(false);
  
  const anim = useAppSelector(state => state.anim);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
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
          {product.colors.map((clr, i) => <li
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
            product.sizes.map((s, i) =>
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
      <div className='flex flex-col gap-4 p-1 '>
        <h4 className='font-medium ml-1'>Choose a Quantity</h4>
        <div className='flex items-center '>
          
          <button
            disabled={addButtonDisabled}
            onClick={() => {
              if(addButtonDisabled){
                return;
              }
              dispatch(setAnimation({
                animation:"addToCheckout",
                itemImage: product.image
              }));
              setAddButtonDisabled(true);
              setTimeout(() => {
                dispatch(stopAnimation());
                setAddButtonDisabled(false);
              }, 3000);

              dispatch(addProduct({
                id: product._id,
                image: product.image,
                name: product.name,
                price: product.price,
                amount: quantity,
                size: product.sizes[index.sizeIndex],
                color: product.colors[index.colorIndex],
                discountId: product.discountId || null
              }))
            }} 
            className='w-36 text-sm rounded-3xl ring-1 ring-redPrim
              text-redPrim py-2 px-4 hover:bg-redPrim hover:text-white disabled:opacity-25'>
            Add To Cart
          </button>
          {anim.animation == "addToCheckout" && 
            <motion.div
              
              className="absolute"
              initial={{opacity: 1, x: "100%" }}
              animate={{opacity: 0, x: "200%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            > 
              <p className="text-3xl font-bold text-red-900">+1</p>
            </motion.div>
          }
        </div>
      </div>
    </>
  )
}