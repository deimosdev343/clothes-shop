import { CustomizeProducts } from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import Add from "@/components/Add";
import React from "react";
import { useSearchParams } from 'next/navigation'
import axios from "axios";

const SinglePage = async ({ params}: {
  params : {slug: string | undefined}
}) => {
  const res = (await axios.get(`${process.env.BACKEND_API}/products//getProductById?id=${params.slug}`)).data;
  
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages pictures={[res.image, ...res.extraImages]}/>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{res.name}</h1>
        <p className="text-bold text-xs text-gray-800">
          {res.description}
        </p>
        <div className="flex items-center gap-4">
          {res.prevPrice && res.prevPrice > res.price && <h3 className="text-xl text-gray-500 line-through">${res.price}</h3>}
          <h2 className="font-medium text-2xl">${res.price}</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts sizes={res.sizes} colors={res.colors}/>
        <div className="h-[2px] bg-gray-100"></div>
        <Add/>
      </div>
    </div>
  );
}

export default SinglePage;