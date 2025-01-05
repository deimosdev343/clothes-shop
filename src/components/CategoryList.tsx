"use client";

import { Category } from "@/types/CategoryType";
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const fetchData = async () => {
    try {
      const res = await axios.get('/api/categories');
      setCategories(res.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.length > 0 && categories.map(cat => (<Link href={`/list?cat=${cat.name}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={cat.image}
              alt=""
              fill
              sizes="100%"
            className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-bold text-cl tracking-wide">{cat.name}</h1>
        </Link>))}
        
      </div>
    </div>
  )
}

export default CategoryList