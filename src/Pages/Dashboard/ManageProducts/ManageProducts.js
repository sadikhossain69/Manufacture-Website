import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageProduct from '../ManageProduct/ManageProduct';
import ToolsDeletingModal from '../ToolsDeletingModal/ToolsDeletingModal';

const ManageProducts = () => {

    const {data: tools, isLoading, refetch} = useQuery('tools', () => fetch('https://peaceful-caverns-76279.herokuapp.com/tools').then(res => res.json()))
    const [toolDelete, setToolDelete] = useState(null)

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
                                setToolDelete={setToolDelete}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {
                toolDelete && <ToolsDeletingModal toolDelete={toolDelete} setToolDelete={setToolDelete} refetch={refetch} />
            }
        </section>
    );
};

export default ManageProducts;