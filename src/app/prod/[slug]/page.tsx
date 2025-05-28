"use client"

import { CustomizeProducts } from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import Add from "@/components/Add";
import React, { useState } from "react";
import { useSearchParams } from 'next/navigation'
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { Product } from "@/types/ProductType";

const SinglePage = async ({ params}: {
  params : {slug: string | undefined},
  
}) => {

  const [prod, setProd] = useState<Product | null>(null)
  
  if(prod)  
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages pictures={[prod.image, ...prod.extraImages]}/>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{prod.name}</h1>
        <p className="text-bold text-xs text-gray-800">
          {prod.description}
        </p>
        <div className="flex items-center gap-4">
          {prod.prevPrice && prod.prevPrice > prod.price && <h3 className="text-xl text-gray-500 line-through">${prod.price}</h3>}
          <h2 className="font-medium text-2xl">${prod.price}</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts product={prod}/>
      </div>
    </div>
  );
}

export default SinglePage;