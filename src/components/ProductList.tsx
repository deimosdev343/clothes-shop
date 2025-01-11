"use client"

import { useAppSelector } from "@/lib/store"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


interface Product {
  _id: string,
  image: string,
  name: string,
  price: number,
  description: string,
  category: string
}
const ProductList = () => {

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`/api/products`);
      if(Array.isArray(res.data)){
        setProducts(res.data.slice(0, 4));
      }

    } catch (err) {
      console.log(err);
    }
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map(prod =>  <Link href={`/prod=${prod._id}`} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="w-full relative h-80">
          <Image
            src={prod.image}
            alt=""
            fill
            sizes="100%"
            className="absolute object-cover rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-md">{prod.name}</span>
          <span className="font-semibold text-md">$49</span>
        </div>
        <div className="text-sm text-gray-500">{prod.description}</div>
        <button className="rounded-2xl ring-1 ring-redPrim text-redPrim py-2 px-4 hover:bg-redPrim hover:text-white w-max">Add To Cart</button>
      </Link>)}
    </div>
  )
}

export default ProductList