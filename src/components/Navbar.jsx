import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

const Navbar = () => {

  return (
    <div className='h-20 px-4 lg:px-16 xl:32 2xl:px-64 relative'>
      <div className='flex items-center justify-between'>

        <Link href='/'>
          <div className='text-2xl font-extrabold'>Cloths Shop</div>
        </Link>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar