"use client"

import Image from "next/image"
import { useState } from "react"
const images = [
  {
    id:1,
    url:"https://i.imgur.com/fzh8p.png"
  },
  {
    id:2,
    url:"http://i.imgur.com/6rJuQ.jpg"
  },
  {
    id:3,
    url:"http://i.imgur.com/oXxwC.jpg"
  },
  {
    id:4,
    url:"http://i.imgur.com/y6w0T.jpg"
  }
]

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (

    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="100%"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-row  gap-4">
        {images.map((prodImg, ind) => <div className="w-1/4 h-32 relative gap-4 mt-8" key={prodImg.id}>
          <Image
            src={prodImg.url}
            alt=""
            fill
            sizes="60%"
            onClick={() => {
              setIndex(ind)
            }}
            className="object-cover rounded-md"
          />
        </div>)}
      </div>
    </div>
  )
}

export default ProductImages