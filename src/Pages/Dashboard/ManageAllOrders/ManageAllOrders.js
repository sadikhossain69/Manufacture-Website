import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {

    const {data: orders, isLoading, refetch} = useQuery('orders', () => fetch('http://localhost:5000/admin/orders', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading) {
        return <Loading/>
    }


    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tool Name</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageAllOrder
                                key={index}
                                order={order}
                                index={index}
                                refetch={refetch}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageAllOrders;