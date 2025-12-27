"use client"

import { clearProducts, useAppDispatch, useAppSelector } from "@/lib/store";
import CartProduct from "../Product/CartProduct";
import CheckoutCartProduct from "./CheckoutProduct";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { CaclculatedOrderType } from "@/types/CalaculatedOrderType";
import CheckoutDiscount from "./CheckoutDiscount";

const CheckoutComponent = () => {
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch()
  const router = useRouter();
  const cartItems = Object.keys(cart).length > 0;
  const getCartTotalPrice = ()  => {
    let price = 0;
    cart.forEach((prod) => {
      price += prod.price;
    })
    return price;
  }

  const getCartPriceAfterDiscounts = () => {
    let price = 0;
    calcuatedOrder.forEach((order) => {
      if(order.price) {
        price += order.price;
      }
    })
    return price;
  }

  const sendPayment = async () => {
    try {
      console.log("cart")
      console.log(cart);
      await axios.post(`/api/checkout`, {products: cart});
      dispatch(clearProducts());
      router.push('/')
    } catch (err) {
      console.log(err);
    }
  }
  console.log(cart)

  

  const getCalcuatedOrder = async () => {
    try {
      const res = await axios.post(`/api/order/calculate`, {productList: cart});
      setCalculatedOrder(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getCalcuatedOrder();
  }, [cart.length])

  const [calcuatedOrder, setCalculatedOrder] = useState<Array<CaclculatedOrderType>>([]);
  let prodIndexCounter =0;

  return (
    <div className="flex flex-col gap-5 py-4 px-2 mb:px-8 w-[100%] md:w-[60%] h-[80%] min-h-[80%] bg-gray-100 shadow-lg justify-between  items-center rounded-xl">
      <div className="flex flex-col items-center w-full h-[80%]  overflow-scroll gap-5">
        {(calcuatedOrder).map((order) => {
          if(order.type =="product") {
            const currIndex = prodIndexCounter;
            prodIndexCounter +=1;
            const cartProduct = cart[currIndex];
            if(cartProduct) return <CheckoutCartProduct product={cart[currIndex]} index={currIndex}/> 
          } else if(order.type == "discount") {
            return <CheckoutDiscount discount={order}/>
          }
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-white w-full rounded-lg p-2 shadow-md">
        <h2 className="font-bold text-2xl">Total Price Before Discounts: {getCartTotalPrice().toFixed(2)}</h2>
        <h2 className="font-bold text-2xl">Total Price After Discounts: {getCartPriceAfterDiscounts().toFixed(2)}</h2>
        <button
          onClick={sendPayment}
          className="w-[30%] p-2 bg-green-500 shadow-lg hover:bg-green-400
            transition-all rounded-lg text-2xl text-white font-bold"
        >
          Continue To Payment
        </button>
      </div>    
    </div>
  )
}

export default CheckoutComponent