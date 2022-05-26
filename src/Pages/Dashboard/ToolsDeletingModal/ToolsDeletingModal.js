import React from 'react';
import toast from 'react-hot-toast';

const ToolsDeletingModal = ({ toolDelete, setToolDelete, refetch }) => {

    const id = toolDelete._id
    console.log(id);

    const handleToolDelete = () => {
        const url = `https://peaceful-caverns-76279.herokuapp.com/tools/${id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount) {
                toast.success("Tool Deleted Successfully", { id: 'Tool Deleted Successfully' })
                setToolDelete(null)
                refetch()
            }
            else {
                toast.error('Failed to Delete Tool', { id: "Failed to Delete Tool" })
            }
        })
    }

    return (
        <section>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are You Sure, You Want To Delete <span className='text-green-500'>{toolDelete.toolName}</span> Tool From Your Tool Collection?</h3>
                    <div className="text-right mt-2">
                        <button onClick={handleToolDelete} className='bg-red-600 text-white py-1 px-4 duration-300 cursor-pointer hover:bg-red-500 rounded font-semibold hover:scale-110 ease-in-out'>Confirm</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ToolsDeletingModal;