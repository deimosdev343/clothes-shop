"use client";

import { Category } from "@/types/CategoryType";
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC<{categories: Category[]}> = ({categories}) => {
  

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:justify-between">
        {categories.length > 0 && categories.map(cat => <CategoryItem category={cat}/>)}
      </div>
    </div>
  )
}

export default CategoryList