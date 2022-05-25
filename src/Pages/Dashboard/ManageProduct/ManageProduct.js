import React from 'react';

const ManageProduct = ({ tool, refetch, index }) => {

    const { toolName, image } = tool

    return (
            <tr className="hover">
                <th>{index + 1}</th>
                <td><img className='w-20 ring-1 rounded' src={image} alt="" /></td>
                <td>{toolName}</td>
                <td><button className="py-1 px-5 rounded ease-in-out duration-300 hover:scale-125 bg-red-600 text-white hover:bg-red-500 border-0">Delete</button></td>
            </tr>
    );
};

export default ManageProduct;