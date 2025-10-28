import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    _id: string,
  image: string,
  name: string,
  price: number,
  description: string,
  category: string
}

const ListProduct = ({_id, image, name, price, description, category}: Props) => {
  return (
    <Link href={`/prod/${_id}`} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] " key={_id}>
      <div className="w-full relative h-80">
        <Image
          src={image}
          alt=""
          fill
          sizes="100%"
          className="absolute object-cover rounded-md z-10"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium text-md">{name}</span>
        <span className="font-semibold text-md">{price}$</span>
      </div>
      <div className="text-sm text-gray-500">{description}</div>
    </Link>
  )
}

export default ListProduct