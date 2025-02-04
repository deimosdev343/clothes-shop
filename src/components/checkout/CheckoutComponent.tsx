"use client"

import { useAppSelector } from "@/lib/store";
import CartProduct from "../Product/CartProduct";
import CheckoutCartProduct from "./CheckoutProduct";

const CheckoutComponent = () => {
  const cart = useAppSelector(state => state.cart);

  return (
    <div className="flex flex-col gap-14 py-4 w-[100%] md:w-[70%] h-[80%] min-h-[80%]   items-center rounded-xl overflow-scroll">
    {(cart).map((prod, index) => <CheckoutCartProduct product={prod} index={index}  key={index}/>)}    
    </div>
  )
}

export default CheckoutComponent