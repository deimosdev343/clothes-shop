"use client"

import { useAppSelector } from "@/lib/store"
import { Product } from "@/types/ProductType"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const ProductList = () => {

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`/api/products`);
      console.log(res);

    } catch (err) {
      console.log(err);
    }
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href={'/test'} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="w-full relative h-80">
          <Image
            src={'https://i.imgur.com/GRz3dtd.png'}
            alt=""
            fill
            sizes="100%"
            className="absolute object-cover rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-md">Product Name</span>
          <span className="font-semibold text-md">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-redPrim text-redPrim py-2 px-4 hover:bg-redPrim hover:text-white w-max">Add To Cart</button>
      </Link>
      <Link href={'/test'} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="w-full relative h-80">
          <Image
            src={'https://i.imgur.com/GRz3dtd.png'}
            alt=""
            fill
            sizes="100%"
            className="absolute object-cover rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-md">Product Name</span>
          <span className="font-semibold text-md">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-redPrim text-redPrim py-2 px-4 hover:bg-redPrim hover:text-white w-max">Add To Cart</button>
      </Link>
      <Link href={'/test'} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="w-full relative h-80">
          <Image
            src={'https://i.imgur.com/GRz3dtd.png'}
            alt=""
            fill
            sizes="100%"
            className="absolute object-cover rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-md">Product Name</span>
          <span className="font-semibold text-md">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-redPrim text-redPrim py-2 px-4 hover:bg-redPrim hover:text-white w-max">Add To Cart</button>
      </Link>
      <Link href={'/test'} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="w-full relative h-80">
          <Image
            src={'https://i.imgur.com/GRz3dtd.png'}
            alt=""
            fill
            sizes="100%"
            className="absolute object-cover rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-md">Product Name</span>
          <span className="font-semibold text-md">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-redPrim text-redPrim py-2 px-4 hover:bg-redPrim hover:text-white w-max">Add To Cart</button>
      </Link>
    </div>
  )
}

export default ProductList