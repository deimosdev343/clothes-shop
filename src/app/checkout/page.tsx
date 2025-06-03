import BillComponent from "@/components/checkout/BillComponent"
import CheckoutComponent from "@/components/checkout/CheckoutComponent"

const CheckoutPage = () => {

  return (
    <div className="flex flex-col md:flex-row  w-full h-screen overflow-scroll">
      <div className="w-full md:w-[65%] min-h-full flex flex-col items-center">
        <h2 className="font-bold text-4xl mb-2">Items For Checkout</h2>
        <CheckoutComponent/>
      </div>
      <div className="w-full md:w-[45%] min-h-full flex flex-col items-center p-2">
        <h2 className="font-bold text-4xl mb-2">Total Bill</h2>
        <BillComponent/>
      </div>
    </div>
  )
}

export default CheckoutPage