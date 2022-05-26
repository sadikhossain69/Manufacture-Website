import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const UpdateProfile = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '7da2b2086b902054d13e6c94a30f0b6a'
    const [user] = useAuthState(auth)



    const handleProfileUpdate = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.display_url
                    const updatedProfile = {
                        image: image,
                        education: data.education,
                        mobile: data.mobile,
                        address: data.address,
                        linkedin: data.linkedin
                    }
                    fetch(`https://peaceful-caverns-76279.herokuapp.com/profile_update/${user.email}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updatedProfile)
                    })
                        .then(res => res.json())
                        .then(updatedResult => {
                            console.log(updatedResult);
                            if (updatedResult.modifiedCount > 0) {
                                toast.success("You Updated Your Profile", { id: 'Your updated Your profile' })
                            }
                            else {
                                toast.error("Failed to Updated Your Profile", { id: "failed to update your profile" })
                            }
                        })
                }
                reset()
            })
    }

    return (
        <section>
            <h2 className="text-3xl text-center underline underline-offset-8 text-blue-500 decoration-blue-500 font-medium">
                Update Your Profile
            </h2>
            <div className='min-h-screen min-w-full'>
                <form className='text-center' onSubmit={handleSubmit(handleProfileUpdate)}>
                    <div className='mt-5 space-y-3'>
                        <input {...register('image', {
                            required: {
                                value: true,
                                message: "Image is Required"
                            }
                        })} type="file" className="input input-bordered w-full md:w-1/2 rounded" placeholder='Your Image' /><br />
                        {errors.image?.type === 'required' && <p className="label-text-alt text-red-500">{errors.image.message}</p>}
                        <input {...register('education', {
                            required: {
                                value: true,
                                message: "Education is Required"
                            }
                        })} type="text" className="input input-bordered w-full md:w-1/2 rounded"
                            placeholder='Your Education' /><br />
                        {errors.education?.type === 'required' && <p className="label-text-alt text-red-500">{errors.education.message}</p>}
                        <input {...register('mobile', {
                            required: {
                                value: true,
                                message: "Mobile Number is Required"
                            }
                        })} type="number" className="input input-bordered w-full md:w-1/2 rounded" placeholder='Your Mobile Number' /><br />
                        {errors.mobile?.type === 'required' && <p className="label-text-alt text-red-500">{errors.mobile.message}</p>}
                        <input {...register('address', {
                            required: {
                                value: true,
                                message: "Address is Required"
                            }
                        })} type="text" className="input input-bordered w-full md:w-1/2 rounded"
                            placeholder='Your Address' /><br />
                        {errors.address?.type === 'required' && <p className="label-text-alt text-red-500">{errors.address.message}</p>}
                        <input {...register('linkedin', {
                            required: {
                                value: true,
                                message: "Linkedin Link is Required"
                            }
                        })} type="text" className="input input-bordered w-full md:w-1/2 rounded" placeholder='Your Linkedin' /><br />
                        {errors.linkedin?.type === 'required' && <p className="label-text-alt text-red-500">{errors.linkedin.message}</p>}
                        <input className='bg-green-600 text-white ease-in-out duration-200 hover:scale-110 hover:bg-green-500 py-1 px-5 cursor-pointer rounded' type="submit" value="Update" />
                    </div>
                </form>
                <div className='text-center mt-2'>
                    <button className='bg-blue-600 text-white ease-in-out duration-200 hover:scale-110 hover:bg-blue-500 py-1 px-5 cursor-pointer rounded'><Link to='/dashboard'>Back to Profile</Link></button>
                </div>
            </div>
        </section>
    );
};

export default UpdateProfile;