import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../Media/PageNotFound/error.png'

const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center w-full md:w-2/3 mx-auto flex-col'>
            <img src={error} alt="" />
            <Link className='bg-blue-500 text-white py-1 px-4 rounded hover:duration-300 hover:bg-blue-400' to='/'>Back To Home</Link>
        </div> 
    );
};

export default PageNotFound;