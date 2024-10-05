import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href={'/test'} className="w-full flex flex-col gap-4 sm:w-[45%] lg:[22%]">
        <div className="w-full relative h-80">
          <Image
            src={'https://i.imgur.com/GRz3dtd.png'}
            alt=""
            fill
            sizes="25%"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all easy duration-500"
          />
          <Image
            src={'https://i.imgur.com/GRz3dtd.png'}
            alt=""
            fill
            sizes="25%"
            className="absolute object-cover rounded-md "
          />
        </div>
      </Link>
    </div>
  )
}

export default ProductList