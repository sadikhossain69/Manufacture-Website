import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Review from '../Review/Review';

const Reviews = () => {

    const {data: reviews, isLoading, refetch} = useQuery('reviews', () => fetch('https://peaceful-caverns-76279.herokuapp.com/reviews').then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }

    return (
        <section className='mt-10'>
            <h2 className="text-3xl text-center text-bold underline underline-offset-2 text-accent decoration-accent my-5">
                Reviews
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-5 px-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
            <div className='text-center mt-2'>
                <button className="btn btn-ghost bg-sky-500 text-white">
                    See More
                </button>
            </div>
        </section>
    );
};

export default Reviews;