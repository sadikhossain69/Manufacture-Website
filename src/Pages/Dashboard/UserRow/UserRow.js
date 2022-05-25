import React from 'react';

const UserRow = ({ user, refetch, index }) => {
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td><button className='btn btn-xs'>Make Admin</button></td>
        </tr>
    );
};

export default UserRow;