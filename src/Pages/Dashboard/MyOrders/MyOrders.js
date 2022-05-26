import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import MyOrder from '../MyOrder/MyOrder';
import MyOrderDeletingModal from '../MyOrderDeletingModal/MyOrderDeletingModal';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const [deleteOrders, setDeleteOrders] = useState(null)
 

    const url = `https://peaceful-caverns-76279.herokuapp.com/orders?email=${user.email}`

    const { data, isLoading, error, refetch } = useQuery('myOrders', () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    if(error) {
        console.log(error);
    }


    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tool</th>
                            <th>email</th>
                            <th>name</th>
                            <th>quantity</th>
                            <th>phone</th>
                            <th>address</th>
                            <th>price</th>
                            <th>action</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, index) => <MyOrder
                                key={index}
                                index={index}
                                data={d}
                                refetch={refetch}
                                setDeleteOrders={setDeleteOrders}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrders && <MyOrderDeletingModal deleteOrders={deleteOrders} refetch={refetch} setDeleteOrders={setDeleteOrders} />
            }
        </section>
    );
};

export default MyOrders;


// <>
                                //     <tr className="hover">
                                //         <th>{index + 1}</th>
                                //         <td>{toolName}</td>
                                //         <td>{email}</td>
                                //         <td>{name}</td>
                                //         <td>{quantity}</td>
                                //         <td>{phone}</td>
                                //         <td>{price}</td>
                                //         <td><button className='bg-sky-600 py-1 px-4 hover:duration-300 hover:bg-sky-500 font-semibold text-white rounded'>Pay</button></td>
                                //         <td><button className='bg-red-600 text-white py-1 px-4 hover:duration-300 hover:bg-red-500 rounded font-semibold'>Delete</button></td>
                                //     </tr>
                                // </>