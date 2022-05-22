import React from 'react';

const Tool = ({ tool }) => {

    const { toolName, image, description, availableQuantity, price } = tool

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toolName}</h2>
                <p>{description}</p>
                <p className='font-semibold'>Available Quantity: {availableQuantity}</p>
                <p className='font-semibold'>Price: ${price} (per qunatity)</p>
                <div className="card-actions">
                    <button className="bg-blue-600 hover:bg-blue-500 border-0 hover:duration-300 py-2 px-4 rounded text-white hover:scale-125">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;