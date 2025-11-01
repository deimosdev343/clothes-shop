import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import CategoryList from "@/components/categories/CategoryList";
import Image from "next/image";
import Footer from "@/components/Footer";
import axios from "axios";
import FeaturedList from "@/components/featured/FeaturedList";


export default async function  Home() {
  const categories = (await axios.get(`${process.env.BACKEND_API}/category`)).data;
  
  return <div className="">
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <FeaturedList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-bold mb-12">Categories</h1>
        <CategoryList categories={categories}/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-bold">New Products</h1>
        <ProductList/>
      </div>
  
    </div>

}


/*
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  items-center sm:items-start">
        <h2 className="text-red-500 font-bold">
          Test Page
        </h2>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
*/