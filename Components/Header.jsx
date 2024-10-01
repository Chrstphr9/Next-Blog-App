import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

//#00204A

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 
            border border-solid border-prishdw shadow-[-7px_7px_0px_#00204A]'> Get Started <Image src={assets.arrow}/></button>
        </div>
        <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium text-pritxt'>Latest Blogs</h1> 
        <p className='mt-10 text-pritxt max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolores fugit, accusantium dignissimos quis nulla.</p>
        <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-prishdw shadow-[-7px_7px_0px_#00204A]' action="">
           <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none'/> 
           <button type='submit' className=' font-medium border-l border-prishdw py-4 px-4 sm:px-8 active:bg-pritxt active:text-white text-pritxt'>Subscribe</button>
        </form>
        </div>    
    </div>
  )
}

export default Header