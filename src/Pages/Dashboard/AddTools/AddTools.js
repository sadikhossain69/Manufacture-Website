import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AddTools = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [addToolLoading, setAddToolLoading] = useState(false)

    const imageStorageKey = '7da2b2086b902054d13e6c94a30f0b6a'

    if (addToolLoading) {
        return <Loading />
    }

    const handleAddTool = data => {
        console.log(data);
        setAddToolLoading(true)
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if(result.success) {
                    const image = result.data.url
                    const tool ={
                        toolName: data.toolName,
                        minimumQuantity: data.minimumQuantity,
                        availableQuantity: data.availableQuantity,
                        price: data.price,
                        image: image,
                        description: data.description
                    }
                    fetch('http://localhost:5000/tools', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                    .then(res => res.json())
                    .then(added => {
                        if(added.insertedId) {
                            toast.success("Successfully Added A Tool", {id: 'added tool'})
                        }
                        else{
                            toast.error("Failed To Added A Tool", {id: 'failed tool'})
                        }
                    })
                }
                setAddToolLoading(false)
                reset()
            })
    }

    return (
        <section>
            <h2 className="text-3xl text-center font-semibold underline underline-offset-2 decoration-blue-600 text-blue-600">Add Tools</h2>
            <div className='flex justify-center items-center mt-5'>
                <form className='space-y-3' onSubmit={handleSubmit(handleAddTool)}>
                    <input {...register('toolName', {
                        required: {
                            value: true,
                            message: "Tool Name is Required"
                        }
                    })} type="text" className='input input-bordered block w-72 md:w-96 rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out' placeholder='Tool Name' />
                    {errors.toolName?.type === 'required' && <p className="label-text-alt text-red-500">{errors.toolName.message}</p>}


                    <input {...register('minimumQuantity', {
                        required: {
                            value: true,
                            message: "Minimum Quantity is Required"
                        }
                    })} type="number" className='input input-bordered block w-72 md:w-96 rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out' placeholder='Minimum Quantity' />
                    {errors.minimumQuantity?.type === 'required' && <p className="label-text-alt text-red-500">{errors.minimumQuantity.message}</p>}


                    <input {...register('availableQuantity', {
                        required: {
                            value: true,
                            message: "Available Quantity is Required"
                        }
                    })} type="number" className='input input-bordered block w-72 md:w-96 rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out' placeholder='Available Quantity' />
                    {errors.availableQuantity?.type === 'required' && <p className="label-text-alt text-red-500">{errors.availableQuantity.message}</p>}


                    <input {...register('price', {
                        required: {
                            value: true,
                            message: "Price is Required"
                        }
                    })} type="number" className='input input-bordered block w-72 md:w-96 rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out' placeholder='Price' />
                    {errors.price?.type === 'required' && <p className="label-text-alt text-red-500">{errors.price.message}</p>}


                    <input {...register('image', {
                        required: true,
                        message: "Image is Required"
                    })} type="file" className='input input-bordered block w-72 md:w-96 rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out' placeholder='Your Rating' />
                    {errors.image?.type === 'required' && <p className="label-text-alt text-red-500">{errors.image.message}</p>}


                    <textarea {...register('description', {
                        required: {
                            value: true,
                            message: "Description Is Required"
                        }
                    })} placeholder='Description' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
                    </textarea>
                    {errors.description?.type === 'required' && <p className="label-text-alt text-red-500">{errors.description.message}</p>}
                    <div className="text-center">
                        <input className='bg-blue-600 text-white py-1 px-5 rounded font-medium cursor-pointer hover:bg-blue-500 duration-300 ease-in-out hover:scale-125' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddTools;