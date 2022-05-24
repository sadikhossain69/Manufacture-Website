import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleAddReview = data => {
        console.log(data);
    }

    return (
        <section>
                <h2 className="text-3xl text-center font-semibold underline underline-offset-2 decoration-blue-600 text-blue-600">Plase Add A Review</h2>
            <div className='flex justify-center items-center mt-5'>
                <form className='space-y-3' onSubmit={handleSubmit(handleAddReview)}>
                    <input {...register('name', {
                        required: {
                            value: true,
                            message: "Name is Required"
                        }
                    })} type="text" className='input input-bordered block w-72 md:w-96 rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out' placeholder='Your Name' />
                    {errors.name?.type === 'required' && <p className="label-text-alt text-red-500">{errors.name.message}</p>}
                    <input {...register('rating', {
                        required: {
                            value: true,
                            message: "Rating is Required"
                        }
                    })} type="text" className='input input-bordered block w-72 md:w-96 rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out' placeholder='Your Rating' />
                    {errors.rating?.type === 'required' && <p className="label-text-alt text-red-500">{errors.rating.message}</p>}
                    <input {...register('image', {
                        required: true,
                        message: "Image is Required"
                    })} type="file" className='input input-bordered block w-72 md:w-96 rounded border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out' placeholder='Your Rating' />
                    {errors.image?.type === 'required' && <p className="label-text-alt text-red-500">{errors.image.message}</p>}
                    <textarea {...register('description', {
                        required: {
                            value: true,
                            message: "Your Review Is Required"
                        }
                    })} placeholder='Your Review' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
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

export default AddReview;