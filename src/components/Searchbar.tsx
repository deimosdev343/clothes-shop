"use client";
import SearchLogo from '../assets/search.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const Searchbar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    if(name) {
      router.push(`/list?name=${name}`)
    }
  };  

  return (
    <form 
      className='flex items-center justify-between 
        gap-4 bg-gray-100 rounded-lg flex-1 p-2'
      onSubmit={handleSearch}
    >
      <input 
        type='text'
        name='name'
        placeholder='Search' 
        className='w-full rounded-md p-1'        
      />
      <button className='cursor-pointer' type='submit'      >   
        <Image src={SearchLogo} alt="" width={16} height={16}/>
      </button>
    </form>
  )
}

export default Searchbar