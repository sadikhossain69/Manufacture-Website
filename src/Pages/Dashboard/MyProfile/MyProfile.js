import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth)
    const [profile, setProfile] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setProfile(data);
        })
    }, [user.email])

    return (
        <section className=' min-h-screen'>
            <h2 className="text-3xl text-center font-semibold underline underline-offset-8 text-accent decoration-accent py-5">My Profile</h2>
            <div className="text-center">
                <div className=' rounded w-full md:w-2/3 mx-auto border-gray-300 shadow-lg bg-purple-50 space-y-5 py-10'>
                    <img className='mx-auto rounded-full w-24 ring-2' src={profile.image} alt="" />
                    <h2 className="text-xl">Name: <span className='font-medium'>{user.displayName}</span></h2>
                    <h2 className="text-lg">Email: <span className='font-medium'>{user.email}</span></h2>
                    <h2 className="text-lg">Education: <span className='font-medium'>{profile.education}</span></h2>
                    <h2 className="text-lg">Mobile: <span className='font-medium'>{profile.mobile}</span></h2>
                    <h2 className="text-lg">Address: <span className='font-medium'>{profile.address}</span></h2>
                    <h2 className="text-lg">Linkedin: <span className='font-medium'>{profile.linkedin}</span></h2>
                    <button className='bg-green-600 text-white hover:bg-green-500 py-1 px-5 rounded duration-200 ease-in-out hover:scale-110'><Link to='/dashboard/update_profile'>Update Your Profile</Link></button>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;