"use client"

import { useAppSelector } from "@/lib/store";

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
    <div className="flex flex-col gap-5 py-4 px-2 mb:px-8 w-[100%]  h-[80%] min-h-[80%]   items-center rounded-xl overflow-scroll">
      <h2 className="font-bold text-2xl">Total Price Before Discounts: {getCartTotalPrice().toFixed(2)}</h2>
      <h2 className="font-bold text-2xl">Total Price After Discounts: {getCartTotalPrice().toFixed(2)}</h2>
      <button className="w-[80%] p-2 bg-green-500 hover:bg-green-400 transition-all rounded-lg text-white font-bold">
        Continue To Payment
      </button>
    </div>
  )
}

export default BillComponent