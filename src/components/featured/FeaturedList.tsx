import axios from 'axios'
import React, { useState } from 'react'

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
      
    } catch (err) {
      console.log(err);
    }
  }

  const [featuredProds, setFeaturedProds] = useState<Product[]>([]);

  return (
    <div>FeaturedList</div>
  )
}

export default FeaturedList