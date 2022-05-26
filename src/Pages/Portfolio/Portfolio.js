import React from 'react';
import portfolio from '../../Media/portfolio.gif'
import { SiMongodb, SiExpress, } from 'react-icons/si'
import { FaReact } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';

const Portfolio = () => {
    return (
        <section>
            <div className="text-gray-600 bg-slate-100 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/qyjp1zb/IMG-20210619-130830.jpg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">Hello !
                            <br className="hidden lg:inline-block" />
                            <span className='text-red-400'>I Am A Front End Developer</span>
                            <br className="hidden lg:inline-block" />
                            My Name Is
                            <br className="hidden lg:inline-block" />
                            Sadik Hossain
                        </h1>
                        <div className="flex justify-center space-x-3">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download My CV</button>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-font">
                <h2 className="text-center text-2xl text-primary my-5 underline font-semibold underline-offset-2">About Me</h2>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className='text-black font-medium'>Hello, My name is Sadik. I am from Bangladesh. Now I am studying in college. I love to code. I am very hard working guy.People say's coding is painful but I thought is coding is fun and very enjoyable. If you enjoy by coding then you will love coding but if you don't enjoy but can't enjoy by coding. My future dream is to become a full stack developer. I started the journey 1 year ago. Now I'm learnig about express js and I will learn forever.</p>
                        <div className='my-1 text-black'>
                            <p>My full name is: <span className='text-black font-semibold'>Sadik Hossain</span></p>
                            <p>My Age: <span className="text-black font-semibold">16</span></p>
                            <p>My Whatsapp Number: <span className="text-black font-semibold">+8801842593133</span></p>
                            <p>My Email: <span className="text-black font-semibold">sadikhossain433@gmail.com</span></p>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded-full" alt="hero" src="https://i.ibb.co/KL6BYn5/IMG-20210619-130830-removebg-preview.png" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-center text-2xl text-primary mt-5 underline font-semibold underline-offset-2">My Skills</h2>
                <div className='flex justify-around items-center flex-col md:flex-row my-10 md:space-x-5'>
                    <div>
                        <h2 className="text-7xl font-bold">M E R N</h2>
                        <div className='flex justify-around items-center flex-col md:flex-row space-x-3 space-y-2'>
                            <div>
                                <SiMongodb className='text-5xl' />
                                <p className="text-lg">MongoDB</p>
                            </div>
                            <div>
                                <SiExpress className='text-5xl' />
                                <p className='text-lg'>Express</p>
                            </div>
                            <div>
                                <FaReact className='text-5xl' />
                                <p className='text-lg'>React</p>
                            </div>
                            <div>
                                <SiExpress className='text-5xl' />
                                <p className='text-lg'>Node</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={portfolio} alt="" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full md: bg-base-100 shadow-xl">
                    <figure><img className='w-full' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full md: bg-base-100 shadow-xl">
                    <figure><img className='w-full' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;