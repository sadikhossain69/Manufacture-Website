import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')

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
                    <button className='btn-accent text-white font-semibold px-5 py-1 duration-300 ease-in-out hover:scale-110 rounded mt-4' type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </form>
                {
                    cardError && <p className='text-red-600'>{cardError}</p>
                }
            </div>
        </>
    );
};

export default CheckoutForm;