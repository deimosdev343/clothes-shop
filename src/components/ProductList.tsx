"use client"

import { useAppSelector } from "@/lib/store"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import ListProduct from "./Product/ListProduct"


interface Product {
  _id: string,
  image: string,
  name: string,
  price: number,
  description: string,
  category: string
}
const ProductList = ({params} : {params?: {category: string | undefined}}) => {

  const fetchProducts = async () => {
    console.log("test")
    try {
      const res = await axios.get(`/api/products`, {params});
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
  }, [params]);

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map(prod =>  <ListProduct
        key={prod._id}
        _id={prod._id}
        image={prod.image}
        name={prod.name}
        price={prod.price}
        description={prod.description}
        category={prod.category}
      />)}
    </div>
  )
}

export default ProductList