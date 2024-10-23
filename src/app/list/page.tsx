import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const ListPage = () => {
    return (
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div className="bg-pink-50 px-4 flex justify-between h-64">
          <div className="flex flex-col justify-center items-center gap-8 w-2/3">
            <h1 className="font-bold text-3xl">Grab up to 50% off on selected Products</h1>
            <button className="bg-redPrim p-2 text-white font-bold rounded-3xl w-[20%]">Buy Now</button>
          </div>
          {/*I'm gonna make this image fetch from the api, bg color as well this is temp TODO: what I just wrote... */}
          <div className="relative w-1/3">
            <Image src="/woman.png" alt="" fill className="object-contain"/>
          </div>
        </div>
        <Filter/>
        <h1>REPLACE THIS WITH BACKEND INPUT</h1>
      <ProductList/>
      </div>
    );
}

export default ListPage;