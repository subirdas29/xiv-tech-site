import React, { useEffect, useState } from 'react';
import img from '../../src/assets/images/Sci-fi.jpg'
import AllCollaborate from './AllCollaborate';

const Collaborate = () => {
    const [details,setDetails] = useState([])

        useEffect(()=>{
        fetch('Details.json')
        .then(res=>res.json())
        .then(data=>{
            setDetails(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-2xl font-bold p-6'>Let's Collaborate</h1>
            {
                
                    details?.map(detail => <AllCollaborate key={detail.id} detail={detail}></AllCollaborate>)
                
            }
        </div>
    );
};

export default Collaborate;