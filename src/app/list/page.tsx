"use client";

import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ListPage = ({}) => {
  const searchPrms = useSearchParams();
  const [params, setParams] = useState({
    category: searchPrms.get("cat") || "",
    name: "",
    sortBy: ""
  });
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      
      <Filter setParams={setParams}/>
      <h1>PROMOTION INPUT</h1>
      <ProductList params={params}/>
    </div>
  );
}

export default ListPage;