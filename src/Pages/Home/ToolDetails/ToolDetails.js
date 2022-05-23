import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const ToolDetails = () => {

    const { id } = useParams()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [quantityError, setQuantityError] = useState(null)

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

    // console.log(toolDetail);

    const handleQuantity = event => {
        const quantity = event.target.value;

        if (minimumQuantity > quantity) {
            setQuantityError(`You have to purchase at least ${minimumQuantity} products`)
        }
        else if (availableQuantity < quantity) {
            setQuantityError(`Your availabel stock is ${availableQuantity}`)
        }
        else {
            setQuantityError(null)
        }

    }



    const handleOrder = data => {
        
        const orderInfo = {
            name: user.displayName,
            email: user.email,
            address: data.address,
            phone: data.number,
            quantity: data.quantity,
            price: price * data.quantity,
            toolName: toolName,
        }
        console.log(orderInfo);
        
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success) {
                toast.success(`Your Order is Done For ${toolName}`)
                reset()
            }
            else{
                toast.error(`Your Already Ordered ${toolName}`)
            }
        })
    }

    return (
        <section>
            <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img className='w-full h-56' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toolName}</h2>
                    <p>{description}</p>
                    <p className='font-semibold'>Minimum Order: {minimumQuantity}</p>
                    <p className='font-semibold'>Available Quantity: {availableQuantity}</p>
                    <p className='font-semibold'>Price: ${price} (per qunatity)</p>
                </div>
            </div>

            <div className='my-8'>
                <h2 className="text-center text-2xl font-semibold underline underline-offset-2">Your Order Details</h2>
                <form className='text-center mt-2 space-y-4' onSubmit={handleSubmit(handleOrder)} >
                    <input type="text" className="input input-bordered w-full md:w-1/3" value={user.displayName} readOnly /><br />
                    <input type="email" className="input input-bordered w-full md:w-1/3" value={user.email} readOnly /><br />
                    <input {...register('address', {
                        required: {
                            value: true,
                            message: 'Address Is Requied'
                        }
                    })} type="text" className="input input-bordered w-full md:w-1/3" placeholder='Enter Your Address' /><br />
                    {errors.address?.type === 'required' && <p className="label-text-alt text-red-500">{errors.address.message}</p>}
                    <input {...register('number', {
                        required: {
                            value: true,
                            message: 'Number is Required'
                        }
                    })} type="number" className="input input-bordered w-full md:w-1/3" placeholder='Enter Your Number' /><br />
                    {errors.number?.type === 'required' && <p className="label-text-alt text-red-500">{errors.number.message}</p>}
                    <input {...register('quantity', {
                        required: {
                            value: true
                        }
                    })} onChange={handleQuantity} type="number" className="input input-bordered w-full md:w-1/3" placeholder='Your Quantity(minimum 100)' defaultValue={minimumQuantity} /><br />
                    {quantityError && <p className="label-text-alt text-red-500">{quantityError}</p>}
                    {
                        !quantityError && <input className="bg-blue-600 hover:bg-blue-500 border-0 hover:duration-300 py-2 px-4 rounded text-white hover:scale-125 cursor-pointer" type="submit" value="Order" />
                    }
                </form>
            </div>
        </section>
    );
};

export default ToolDetails;