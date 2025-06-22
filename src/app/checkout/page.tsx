import BillComponent from "@/components/checkout/BillComponent"
import CheckoutComponent from "@/components/checkout/CheckoutComponent"

const CheckoutPage = () => {

  return (
    <div className="flex flex-col md:flex-row  w-full h-screen overflow-scroll">
      <div className="w-full  min-h-full flex flex-col items-center">
        <h2 className="font-bold text-4xl mb-2">Checkout</h2>
        <CheckoutComponent/>
      </div>
      
    </div>
  )
}

export default CheckoutPage