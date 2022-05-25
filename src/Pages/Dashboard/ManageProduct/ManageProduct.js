import React from 'react';

const ManageProduct = ({ tool, refetch, index, setToolDelete }) => {

    const { toolName, image } = tool

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td><img className='w-20 ring-1 rounded' src={image} alt="" /></td>
            <td>{toolName}</td>
            <td><label onClick={() => setToolDelete(tool)} htmlFor="my-modal-3" className="bg-red-600 text-white py-1 px-4 duration-300 cursor-pointer hover:bg-red-500 rounded font-semibold hover:scale-110 ease-in-out">Delete</label></td>
        </tr>
    );
};

export default ManageProduct;