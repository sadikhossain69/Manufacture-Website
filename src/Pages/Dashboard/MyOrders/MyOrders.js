import React from 'react';

const MyOrders = () => {
    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tool</th>
                            <th>name</th>
                            <th>email</th>
                            <th>quantity</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrders;