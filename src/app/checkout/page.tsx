import CheckoutComponent from "@/components/checkout/CheckoutComponent"

const CheckoutPage = () => {

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full md:w-[65%] min-h-full flex flex-col items-center">
        <h2 className="font-bold text-4xl mb-2">Item List</h2>
        <CheckoutComponent/>
      </div>
    </div>
  )
}

export default CheckoutPage