import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {

    const {data: tools, isLoading, refetch} = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()))

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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ManageProduct
                                key={index}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageProducts;