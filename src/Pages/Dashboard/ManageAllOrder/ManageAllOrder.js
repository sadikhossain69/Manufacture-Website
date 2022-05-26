import React from 'react';

const ManageAllOrder = ({ order, index, refetch }) => {

    const { name, toolName, quantity, email, price, paid, adminAccept, _id } = order

    const handlePending = () => {
        fetch(`https://peaceful-caverns-76279.herokuapp.com/admin/orders/${_id}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>
                {
                    (paid && !adminAccept) && <button onClick={handlePending} className='bg-sky-600 py-1 px-4 hover:duration-300 hover:bg-sky-500 font-semibold text-white rounded'>Pending</button>
                }
                {
                    (paid && adminAccept) && <button className='bg-green-600 py-1 px-4 hover:duration-300 hover:bg-green-500 font-semibold text-white rounded'>Shipped</button>
                }
                {
                    (!paid && !adminAccept) && <button className='bg-red-600 py-1 px-4 hover:duration-300 hover:bg-red-500 font-semibold text-white rounded'>Not Paid</button>
                }
            </td>
        </tr>
    );
};

export default ManageAllOrder;