import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import login from '../../Media/Login/login.png'
import { BsGoogle } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    
    const [token] = useToken(googleUser || emailUser)

    useEffect( () => {
        if (token) {
            toast.success("User Logged In", { id: 'Login' })
            navigate(from, { replace: true });
        }
    }, [token, from, navigate] )

    if (googleLoading || emailLoading) {
        return <Loading />
    }

    if (googleError || emailError) {
        toast.error(googleError?.message || emailError?.message, { id: 'error' })
    }

    const handleLogin = data => {
        console.log(data);
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)
        reset()
    }


    return (
        <section>
            <h2 className="text-3xl text-center mt-3 underline underline-offset-8 text-accent decoration-accent">Login Here</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-96 ml-9' src={login} alt="" />
                    <div className="card flex-shrink-0 w-full lg:w-96 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register('email', {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide A Valid Email'
                                        }
                                    })} type="email" placeholder="Enter Email" className="input input-bordered" />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <p className="label-text-alt text-red-500">{errors.email.message}</p>}
                                        {errors.email?.type === 'pattern' && <p className="label-text-alt text-red-500">{errors.email.message}</p>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or longer'
                                        },
                                        pattern: {
                                            value: /(?=.*?[A-Z])/,
                                            message: 'At least One Uppercase'
                                        },
                                    })} type="password" placeholder="Enter Password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                                    {errors.password?.type === 'minLength' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                                    {errors.password?.type === 'pattern' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p className='mt-2'><small>new to manufacture house? <Link className='text-accent' to='/signUp' >Sign Up Here</Link></small></p>
                                <div className="divider">OR</div>
                            </form>
                            <button onClick={() => signInWithGoogle()} className="btn btn-accent text-white flex justify-center items-center">
                                <BsGoogle className='mr-2 text-xl' />
                                <div>
                                    Continue With Google
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;