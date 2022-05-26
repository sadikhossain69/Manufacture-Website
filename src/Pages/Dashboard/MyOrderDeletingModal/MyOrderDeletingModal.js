import React from 'react';
import toast from 'react-hot-toast';

const MyOrderDeletingModal = ({ deleteOrders, refetch, setDeleteOrders }) => {

    console.log(deleteOrders);

    const { toolName, _id, quantity, price } = deleteOrders

    const handleOrderDelete = () => {
        const url = `https://peaceful-caverns-76279.herokuapp.com/orders/${_id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount) {
                toast.success('Order Canceled Successful', {id: 'order cancel'})
                setDeleteOrders(null)
                refetch()
            }
            else{
                toast.error("Failed to Cancel Order", {id: "failed"})
            }
        })
    }

    return (
        <div>

            <input type="checkbox" id="my-order-deleting-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure, You Want To Delete <span className='text-sky-600'>{toolName}</span>!</h3>
                    <div className="text-center">
                        <p>Product ID: {_id}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Price: {price}</p>
                    </div>
                    <div className='text-center md:text-right mt-2 space-x-2'>
                        <button onClick={handleOrderDelete} className="bg-red-600 text-white  py-1 px-5 rounded hover:bg-red-500 hover:duration-300 cursor-pointer border-0">Delete</button>
                        <label htmlFor="my-order-deleting-modal" className="bg-green-600 text-white  py-1 px-5 rounded hover:bg-green-500 hover:duration-300 cursor-pointer">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyOrderDeletingModal;