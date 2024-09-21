"use client";
import SearchLogo from '../assets/search.png';
import Image from 'next/image';
import React from 'react'

const Searchbar = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    
  }
  return (
    <form className='flex items-center justify-between gap-4 bg-gray-100 rounded-lg flex-1 p-2'>
      <input type='text' placeholder='Search' className='w-full rounded-md p-1'/>
      <button className='cursor-pointer'>
        <Image src={SearchLogo} alt="" width={16} height={16}/>
      </button>
    </form>
  )
}

export default Searchbar