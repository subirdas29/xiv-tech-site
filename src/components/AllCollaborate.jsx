import React from 'react';

const AllCollaborate = ({detail}) => {
    const {title,description,link,image} = detail
    return (
        <div className='grid grid-cols-2'>
           <div>
           <h1>{title}</h1>
            <p>{description}</p>
            <p>{link}</p>
           </div>
           <div>
           <img src={image} alt="" />
           </div>
        </div>
    );
};

export default AllCollaborate;