import React from 'react';

const MyOrder = ({ index, data, refetch, setDeleteOrders }) => {

    const { name, email, address, phone, price, quantity, toolName } = data

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>${price}</td>
            <td><button className='bg-sky-600 py-1 px-4 hover:duration-300 hover:bg-sky-500 font-semibold text-white rounded'>Pay</button></td>
            <td><label onClick={() => setDeleteOrders(data)} htmlFor="my-order-deleting-modal" className='bg-red-600 text-white py-1 px-4 hover:duration-300 cursor-pointer hover:bg-red-500 rounded font-semibold'>Delete</label></td>
        </tr>
    );
};

export default MyOrder;