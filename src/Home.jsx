import React from 'react';
import MealCategories from './Components/MealCategories';
import { FaArrowRight } from 'react-icons/fa';
import NavBar from './Components/NavBar';
import Image from './Assets/salad1.png'
function Home() {
  return (
    <div>
    <NavBar/>
    <div className='absolute left-1/2 z-10 w-2/5 h-1/3 top-20'>
      <img src={Image} alt=''></img>
    </div>
      <div className="flex flex-col lg:flex-row min-h-screen relative">
        <div className="lg:w-2/3 px-16 bg-[#F2F1EC] justify-center items-start flex flex-col gap-10 relative">
          <div className='flex flex-col gap-3'>
            <h2 className='text-[#345333] font-sans text-xl font-bold'>Discount upto 20%</h2>
            <p className='text-[#345333] font-serif text-5xl font-bold'>Buy Fresh And Organic Grocery Food</p>
            <p className='text-[#cfcbc7] font-sans'>Lorem ipsum dolor sit amet consectetur. Condimuntum sed sed blandit purus.</p>
          </div>
          <div className='flex flex-row items-center gap-20'>
            <button className='font-sans bg-[#345333] text-white text-xs font-bold px-6 py-4 rounded-full flex items-center '>SHOP NOW<FaArrowRight className="ml-2" /></button>
            <div className='flex flex-row gap-10 items-center'>
              <div>
                <h1 className='text-3xl font-serif text-[#345333]'>20K&nbsp;+</h1>
                <h6 className='text-sm font-sans text-[#cfcbc7] font-bold'>Users</h6>
              </div>
              <span className="border-l-2 h-10 border-stone-300"></span>
              <div>
                <h1 className='text-3xl font-serif text-[#345333]'>18K&nbsp;+</h1>
                <h6 className='text-sm font-sans text-[#cfcbc7] font-bold'>Products</h6>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="w-full lg:w-1/2 p-6 bg-[#345333]">
        </div>
      </div>

      <MealCategories />
    </div>
  );
}

export default Home;
