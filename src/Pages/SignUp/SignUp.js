import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import signUp from '../../Media/SignUp/signUp.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    useEffect(() => {
        if (googleUser || emailUser) {
            console.log(googleUser || emailUser);
            toast.success("Logged In Succesfully", { id: "logged iN succesfully" })
            navigate('/')
        }
    }, [googleUser, emailUser, navigate])

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
        createUserWithEmailAndPassword(email, password)
        reset()
    }

    return (
        <section>
            <h2 className="text-3xl text-center mt-3 underline underline-offset-8 text-accent decoration-accent">Sign Up Here</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-96 ml-9' src={signUp} alt="" />
                    <div className="card flex-shrink-0 w-full lg:w-96 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register('name', {
                                        required: {
                                            value: true,
                                            message: "Name is Required"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Must Have 3 Character or Longer"
                                        }
                                    })} type="text" placeholder="Enter Name" className="input input-bordered" />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <p className="label-text-alt text-red-500">{errors.name.message}</p>}
                                        {errors.name?.type === 'minLength' && <p className="label-text-alt text-red-500">{errors.name.message}</p>}
                                    </label>
                                </div>
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
                                <p className='mt-2'><small>Already Have an Account? <Link className='text-accent' to='/login' >Login Here</Link></small></p>
                                <div className="divider">OR</div>
                            </form>
                            <button onClick={ () => signInWithGoogle() } className="btn btn-accent text-white flex justify-center items-center">
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

export default SignUp;