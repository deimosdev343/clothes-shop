import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href={'/test'} className="relative w-full h-80">
        <Image
          src={'https://i.imgur.com/GRz3dtd.png'}
          alt=""
          fill
          sizes="25vw"

        />
      </Link>
    </div>
  )
}

export default ProductList