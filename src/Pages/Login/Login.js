import React from 'react';
import login from '../../Media/Login/login.png'

const Login = () => {
    return (
        <section>
            <h2 className="text-3xl text-center mt-3 underline underline-offset-8 text-accent decoration-accent">Login Here</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-96 ml-9' src={login} alt="" />
                    <div className="card flex-shrink-0 w-full lg:w-96 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <button href="#" className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;