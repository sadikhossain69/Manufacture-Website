import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {

    const { id } = useParams()

    const url = `http://localhost:5000/orders/${id}`

    const stripePromise = loadStripe('pk_test_51L0q9uHZj0Xrm17hnHQItw0oVuscyz2DwBUiDjqiUKVWHKdzuiIAwGEXpp4p0P1w8yJxu6oxgvBT9yTrQWILHfCQ00K5BuLSky');

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    return (
        <section>
            <div className='space-y-3'>
                <div className="card max-w-md bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <p className="text-success">Hello, {order.name}</p>
                        <h2 className="card-title">Pay For {order.toolName}</h2>
                        <p>Your Email: {order.email}</p>
                        <p>Your Phone: {order.phone}</p>
                        <p>Total Quantity: {order.quantity}</p>
                        <p>Please Pay: ${order.price}</p>
                    </div>
                </div>
                <div className="card max-w-md shadow-2xl bg-base-100 mx-auto">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;