import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const ToolDetails = () => {

    const { id } = useParams()

    const { data: toolDetail, isLoading, error, refetch } = useQuery('toolDetail', () => fetch(`http://localhost:5000/tools/${id}`).then(res => res.json()))
    
    if (isLoading) {
        return <Loading />
    }

    if (error) {
        toast.error(error, { id: 'error' })
    }
    
    const { toolName, image, description, availableQuantity, price } = toolDetail
    
    console.log(toolDetail);

    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
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
        </section>
    );
};

export default ToolDetails;