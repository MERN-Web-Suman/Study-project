
import React from 'react'
import {
   
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

export default function Footer() {
  return (
         
    <div className='bg-[#2699fb] ' >

              <div className='   max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>

      <div>
        <h1 className='w-full text-3xl font-bold text-white text-center '>WsCube Tech.</h1>

        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6 '>

          <FaFacebookSquare size={30}  className='hover:scale-150 duration-300 cursor-pointer ' />

          <FaInstagram size={30}  className='hover:scale-150 duration-300 cursor-pointer  '  />

          <FaTwitterSquare size={30}  className='hover:scale-150 duration-300 cursor-pointer  '  />

          <FaGithubSquare size={30}  className='hover:scale-150 duration-300 cursor-pointer  '  />

        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-white text-center '>Solutions</h6>

          <ul className='cursor-pointer  ' >
            <li className='py-2 text-sm hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Analytics</li>

            <li className='py-2 text-sm hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Marketing</li>

            <li className='py-2 text-sm hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Commerce</li>

            <li className='py-2 text-sm hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-white text-center'>Support</h6>
          <ul>
            <li className='py-2 text-sm cursor-pointer  hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300 '>Pricing</li>

            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Documentation</li>

            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Guides</li>

            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-white text-center'>Company</h6>

          <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>About</li>

            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Blog</li>

            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Jobs</li>

            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Press</li>

            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-white text-center'>Legal</h6>
          <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Claim</li>

            <li className='py-2 text-sm cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Policy</li>

            <li className='py-2 text-sm  cursor-pointer hover:text-[white] hover:underline decoration-[#fffefe]  hover:scale-105 duration-300'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    
  )
}
