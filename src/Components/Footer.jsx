import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
              <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nostrum hic fuga laudantium nesciunt. Laudantium itaque quidem dolore consequatur, totam aspernatur aliquam voluptatibus quo ea 
                in eos maiores, accusantium possimus!</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0' >

            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col text-gray-400 gap-2'>
                <a href='#Header' className='hover:text-white'>Home</a>
                <a href='#About' className='hover:text-white'>About Us</a>
                <a href='#Contact' className='hover:text-white'>Contact Us</a>
                <a href='#Testimonials' className='hover:text-white'>Testimonials</a>
            </ul>

        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our News Letter</h3>
        <p className='text-gray-400 mb-4 max-w-80'>The latest new, articles and resources, sent to your inbox weekly.</p>
        <div className=' flex gap-2'>
          <input type="text" placeholder='Enter Your Email'  className='w-full p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto'/>
          <button className='py-2 px-4 rounded bg-blue-500'>Subscribe</button>
        </div>

        </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
          Copyright 2025 @ BAWA Ernest Kwame. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer