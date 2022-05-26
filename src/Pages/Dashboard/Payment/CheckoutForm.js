import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Loading from '../../Shared/Loading/Loading';

const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')

    const { price, _id, toolName, email, name } = order

    useEffect(() => {
        fetch(`https://peaceful-caverns-76279.herokuapp.com/create-payment-intent`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)
                }
            })
    }, [price])

    if (processing) {
        return <Loading />
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setSuccess('')
        setProcessing(true)


        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        }
        else {
            setCardError('')
            console.log(paymentIntent)
            setTransactionId(paymentIntent.id)
            setSuccess('Congratulation! Your Payment Is completed')

            const payment = {
                orderId: _id,
                transactionId: paymentIntent.id,
            }

            fetch(`https://peaceful-caverns-76279.herokuapp.com/orders/${_id}`, {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setProcessing(false)
                })

        }

    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className='btn-accent text-white font-semibold px-5 py-1 duration-300 ease-in-out hover:scale-110 rounded mt-4' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </form>
                {
                    cardError && <p className='text-red-600'>{cardError}</p>
                }
                {
                    success && <div className='text-green-600'>
                        <p>{success}</p>
                        <p>Your Transaction Id is: {transactionId}</p>
                    </div>
                }
            </div>
        </>
    );
};

export default CheckoutForm;