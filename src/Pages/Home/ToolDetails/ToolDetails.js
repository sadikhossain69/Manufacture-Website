import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const ToolDetails = () => {

    const { id } = useParams()

    const { data: toolDetail, isLoading, error, refetch } = useQuery('toolDetail', () => fetch(`http://localhost:5000/tools/${id}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    
    if (isLoading) {
        return <Loading />
    }

    if (error) {
        toast.error(error, { id: 'error' })
    }
    
    const { toolName, image, description, availableQuantity, minimumQuantity, price } = toolDetail
    
    console.log(toolDetail);

    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img className='w-full h-56' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toolName}</h2> 
                    <p>{description}</p>
                    <p className='font-semibold'>Minimum Order: {minimumQuantity}</p>
                    <p className='font-semibold'>Available Quantity: {availableQuantity}</p>
                    <p className='font-semibold'>Price: ${price} (per qunatity)</p>
                </div>
            </div>
        </section>
    );
};

export default ToolDetails;