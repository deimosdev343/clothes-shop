"use client"

import { useAppSelector } from "@/lib/store";
import Link from "next/link";

const BillComponent = () => {
  const cart = useAppSelector(state => state.cart);

  const cartItems = Object.keys(cart).length > 0;
  const getCartTotalPrice = ()  => {
    let price = 0;
    cart.forEach((prod) => {
      price += prod.amount * prod.price;
    })
    return price;
  }

  return (
    <div className="flex flex-col gap-5 py-4 px-2 mb:px-8 w-[100%]   items-center justify-between rounded-xl overflow-scroll bg-gray-100 mr-5 shadow-md">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="font-bold text-2xl">Total Price Before Discounts: {getCartTotalPrice().toFixed(2)}</h2>
        <h2 className="font-bold text-2xl">Total Price After Discounts: {getCartTotalPrice().toFixed(2)}</h2>
      </div>

      <Link href={`/payment`} className="w-[80%] p-4 bg-green-500 shadow-lg hover:bg-green-400 transition-all rounded-lg text-2xl text-white font-bold">
        Continue To Payment
      </Link>
    </div>
  )
}

export default BillComponent