import React, { useState } from 'react'
import { FaChevronDown, FaSearch, FaUser, FaArrowRight, FaBars, FaTimes } from 'react-icons/fa'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='absolute z-10 top-2 flex flex-row items-center justify-between w-full px-4 sm:px-8 lg:px-16'>
      <h1 className='text-[#264e35] font-bold font-sans text-xl sm:text-2xl'>
        GO&nbsp;<span className='text-[#264e35] font-extrabold font-sans'>FOOD</span>
      </h1>
      <div className='hidden sm:flex flex-row gap-4 md:gap-6 lg:gap-10'>
        <button className='flex items-center text-sm sm:text-base font-semibold'>
          Home<span className='ml-1'><FaChevronDown/></span>
        </button>
        <button className='flex items-center text-sm sm:text-base font-semibold'>
          Groceries<span className='ml-1'><FaChevronDown/></span>
        </button>
        <button className='flex items-center text-sm sm:text-base font-semibold'>
          Pages<span className='ml-1'><FaChevronDown/></span>
        </button>
      </div>
      <button className='hidden sm:flex flex-row items-center text-white text-sm sm:text-base'>
        Connect with us<span className='ml-2'><FaArrowRight/></span>
      </button>
      <div className='flex flex-row items-center gap-2'>
        <button className='p-2 sm:p-3 bg-white bg-opacity-10 rounded-full'>
          <FaSearch color='#F1F1EB'/>
        </button>
        <button className='p-2 sm:p-3 bg-white bg-opacity-10 rounded-full'>
          <FaUser color='#FFFFFF'/>
        </button>
        <button className='p-2 sm:p-3 bg-white bg-opacity-10 rounded-full'>
          <FaHeart color='#F1F1EB'/>
        </button>
        <button className='p-2 sm:p-3 bg-white bg-opacity-10 rounded-full'>
          <FaCartShopping color='#F1F1EB'/>
        </button>
        <button className='sm:hidden p-2 bg-white bg-opacity-10 rounded-full' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes color='#111111' /> : <FaBars color='#111111' />}
        </button>
      </div>
      {isMenuOpen && (
        <div className='absolute top-14 right-0 w-fir bg-white flex flex-col items-end px-8  sm:hidden'>
          <button className='flex items-center text-base font-semibold py-2'>
            Home
          </button>
          <button className='flex items-center text-base font-semibold py-2'>
            Groceries
          </button>
          <button className='flex items-center text-base font-semibold py-2'>
            Pages
          </button>
          <button className='flex items-center text-base font-semibold py-2'>
            Connect with us
          </button>
        </div>
      )}
    </div>
  )
}

export default NavBar
