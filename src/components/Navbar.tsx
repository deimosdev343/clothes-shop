import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import LogoIcon from '../assets/Logo.png';
import Image from 'next/image';
import Searchbar from './Searchbar';
import NavIcons from './NavIcons.tsx';
const Navbar = () => {

  return (
    <div className='h-20 px-4 lg:px-16 xl:32 2xl:px-64 relative '>
      <div className='flex items-center justify-between md:hidden'>
        <Link href='/'>
          <div className='text-2xl font-extrabold'>Cloths Shop</div>
        </Link>
        <Menu/>
      </div>
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        <div className='w-1/3'>
          <Link href='/' className='relative flex items-center'>
            <div className='text-2xl font-extrabold'>Cloths Shop</div>
            <Image
              src={LogoIcon}
              alt=''
              className='w-[15%] h-[15%]'
            />        
          </Link>
        </div>
        <div className='w-2/3 flex items-center justify-between gap-8 '>
          <Searchbar/>
          <NavIcons/>
        </div>
      </div>
    </div>
  )
}

export default Navbar