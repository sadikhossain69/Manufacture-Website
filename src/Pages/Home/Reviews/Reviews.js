import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const reviews = [
        {
            id: 1,
            name: 'Captain Don',
            img: `https://i.ibb.co/NZhsgdb/captain-Don.jpg`,
            rating: '👌👌👌👌👌',
            description: 'This is company is a very good company.I loved this company.I will order more item fromt this company in future'
        },
        {
            id: 6,
            name: 'Captain Don',
            img: `https://i.ibb.co/NZhsgdb/captain-Don.jpg`,
            rating: '👌👌👌👌👌',
            description: 'This is company is a very good company.I loved this company.I will order more item fromt this company in future'
        },
        {
            id: 2,
            name: 'Captain Don',
            img: `https://i.ibb.co/NZhsgdb/captain-Don.jpg`,
            rating: '👌👌👌👌👌',
            description: 'This is company is a very good company.I loved this company.I will order more item fromt this company in future'
        },
        {
            id: 3,
            name: 'Captain Don',
            img: `https://i.ibb.co/NZhsgdb/captain-Don.jpg`,
            rating: '👌👌👌👌👌',
            description: 'This is company is a very good company.I loved this company.I will order more item fromt this company in future'
        },
        {
            id: 4,
            name: 'Captain Don',
            img: `https://i.ibb.co/NZhsgdb/captain-Don.jpg`,
            rating: '👌👌👌👌👌',
            description: 'This is company is a very good company.I loved this company.I will order more item fromt this company in future'
        },
        {
            id: 5,
            name: 'Captain Don',
            img: `https://i.ibb.co/NZhsgdb/captain-Don.jpg`,
            rating: '👌👌👌👌👌',
            description: 'This is company is a very good company.I loved this company.I will order more item fromt this company in future'
        },
    ]

    return (
        <section className='mt-10'>
            <h2 className="text-3xl text-center text-bold underline underline-offset-2 text-accent decoration-accent my-5">
                Reviews
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-5 px-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
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