import React from 'react';
import { BsFlagFill } from 'react-icons/bs'
import { RiComputerFill } from 'react-icons/ri'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { VscFeedback } from 'react-icons/vsc'

const BusinessSummary = () => {
    return (
        <section className='my-3 space-y-3'>
            <h2 className="text-center text-3xl font-bold no-underline md:underline decoration-accent text-accent underline-offset-4">Our Business Summary</h2>
            <div className='text-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7'>
                    <div className='space-y-4 text-center'>
                        <div><BsFlagFill className='inline-block text-6xl' /></div>
                        <h1 className="text-4xl font-bold text-slate-900">50+</h1>
                        <h2 className="text-xl text-accent font-semibold">Countries</h2>
                    </div>
                    <div className='space-y-4 text-center'>
                        <div><RiComputerFill className='inline-block text-6xl' /></div>
                        <h1 className="text-4xl font-bold text-slate-900">10M+</h1>
                        <h2 className="text-xl text-accent font-semibold">Total Sales</h2>
                    </div>
                    <div className='space-y-4 text-center'>
                        <div><HiOutlineUserGroup className='inline-block text-6xl' /></div>
                        <h1 className="text-4xl font-bold text-slate-900">500+</h1>
                        <h2 className="text-xl text-accent font-semibold">Happy Clients</h2>
                    </div>
                    <div className='space-y-4 text-center'>
                        <div><VscFeedback className='inline-block text-6xl' /></div>
                        <h1 className="text-4xl font-bold text-slate-900">100+</h1>
                        <h2 className="text-xl text-accent font-semibold">Feedbacks</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;