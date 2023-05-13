import React from 'react';

const AllCollaborate = ({detail}) => {
    const {title,description,link,image} = detail
    return (
        <div className='grid grid-cols-2 font-serif'>
           <div className='text-left pr-[20%]'>
           <h1 className='font-light text-5xl'>{title}</h1>
            <p className='pt-11 pb-24 font-medium text-xl'>{description}</p>
            <p className='mb-4 text-xl '>{link}</p>
           </div>
           <div>
           <img className='w-[88%] h-full px-4' src={image} alt="" />
           </div>
        </div>
    );
};

export default AllCollaborate;