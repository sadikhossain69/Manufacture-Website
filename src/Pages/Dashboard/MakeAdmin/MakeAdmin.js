import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserRow from '../UserRow/UserRow';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: "GET",
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
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MakeAdmin;