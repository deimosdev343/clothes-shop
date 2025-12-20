"use client"

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ListProduct from '../Product/ListProduct'

interface Product {
  _id: string,
  image: string,
  name: string,
  price: number,
  description: string,
  category: string
}


const FeaturedList = () => {
  const fetchFeatured = async () => {
    try {
      const res = await axios.get(`/api/featured`);
      setFeaturedProds(res.data);
    } catch (err) {
      console.log(err);
    }
  }


  const [featuredProds, setFeaturedProds] = useState<Product[]>([]);
  useEffect(() => {
    const inter = setInterval(() => {
      fetchFeatured();

    }, 1000);

    return () => {
      clearInterval(inter);
    }
  }, [])
  return (
     <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {featuredProds.map(prod => <ListProduct
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

export default FeaturedList