import React from 'react';

const ToolsDeletingModal = ({ toolDelete, setToolDelete, refetch }) => {
    return (
        <section>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are You Sure, You Want To Delete <span className='text-green-500'>{toolDelete.toolName}</span> Tool From Your Tool Collection?</h3>
                    <div className="text-right mt-2">
                        <button className='bg-red-600 text-white py-1 px-4 duration-300 cursor-pointer hover:bg-red-500 rounded font-semibold hover:scale-110 ease-in-out'>Confirm</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ToolsDeletingModal;