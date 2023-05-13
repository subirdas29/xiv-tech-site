import React, { useEffect, useState } from 'react';
import img from '../../src/assets/images/Sci-fi.jpg'
import AllCollaborate from './AllCollaborate';
import { Link } from 'react-router-dom';

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
            <h1 className='text-2xl font-bold px-16 py-10 font-serif'>Let's Collaborate</h1>
           <div className='py-16 px-10'>
           {
                
                details?.map(detail => <AllCollaborate key={detail.id} detail={detail}></AllCollaborate>)
        }

       
           </div>
           <div className='py-16 px-10' > <a href="#"><span className='border border-2 px-12 py-4 border-black hover:bg-black hover:text-white'>Get in touch</span></a></div>
        </div>
    );
};

export default Collaborate;