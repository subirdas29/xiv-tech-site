import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const AllCollaborate = ({detail}) => {
    const {title,description,link,image} = detail
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 font-serif lg:py-0 lg:px-0 py-3.5 px-5'>
           <div className='text-left lg:pr-[20%]'>
           <h1 className='font-light text-5xl lg:py-0 py-11'>{title}</h1>
           <div className='lg:hidden'>
           <img className='w-full h-full lg:px-4 px-0' src={image} alt="" />
           </div>
            <p className='lg:pt-11 lg:pb-24 pt-8 pb-4 font-medium text-xl'>{description}</p>
           
          <div className='flex items-center'>
          <p className='text-xl font-light'>{link}</p> <FaArrowRight className='ml-4'></FaArrowRight>
          </div>
            
            
           </div>
           <div className='lg:block hidden'>
           <img className='lg:w-[88%]  w-full h-full lg:px-4 px-0' src={image} alt="" />
           </div>
        </div>
    );
};

export default AllCollaborate;