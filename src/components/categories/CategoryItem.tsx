import { Category } from '@/types/CategoryType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryItem = ({category}:{category: Category}) => {

  return (
    <Link href={`/list?cat=${category.name}`} className="border-2 p-2 rounded-xl shadow-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6" key={category.name}>
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="100%"
        className="object-cover rounded-xl"
        />
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className="mt-8 font-bold text-xl tracking-wide capitalize">{category.name}</h1>

      </div>
    </Link>
  )
}

export default CategoryItem