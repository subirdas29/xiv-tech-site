import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const AllCollaborate = ({detail}) => {
    const {title,description,link,image} = detail
    return (
        <div className='grid grid-cols-2 font-serif'>
           <div className='text-left pr-[20%]'>
           <h1 className='font-light text-5xl'>{title}</h1>
            <p className='pt-11 pb-24 font-medium text-xl'>{description}</p>
           
          <div className='flex items-center'>
          <p className='text-xl font-light'>{link}</p> <FaArrowRight className='ml-4'></FaArrowRight>
          </div>
            
            
           </div>
           <div>
           <img className='w-[88%] h-full px-4' src={image} alt="" />
           </div>
        </div>
    );
};

export default AllCollaborate;