import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ user, refetch, index }) => {


    const makeAdmin = () => {
        fetch(`https://peaceful-caverns-76279.herokuapp.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403) {
                    toast.error('Failed to make an Admin', {id: 'failed to make an admin'})
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    console.log(data);
                    return toast.success("Successfully make Admin", { id: 'admin toast' })
                }
            })
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                {
                    user.role !== 'admin' ?
                    <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>
                    :
                    <button className="btn btn-xs bg-green-600 border-0 hover:bg-green-500">Already Admin</button>
                }
            </td>
        </tr>
    );
};

export default UserRow;