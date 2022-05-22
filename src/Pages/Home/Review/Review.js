import React from 'react';

const Review = ({review}) => {

    const {name, img, description, rating} = review 

    return (
        <div className='border-2 py-3 rounded px-3'>
            <img className='w-24 mx-auto ring-2 rounded-full ring-green-500' src={img} alt="" />
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className="font-semibold">Rating: {rating}</p>
            <p className="font-semibold">
                {description}
            </p>
        </div>
    );
};

export default Review;