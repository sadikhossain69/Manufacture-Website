import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section>
            <div className="drawer drawer-mobile">
                <input id="dashboardToggle" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl text-purple-500 font-semibold text-center my-2'>Welcome to Dashboard</h2>
                    <Outlet/>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardToggle" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;