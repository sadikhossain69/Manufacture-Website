import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section className='my-3'>
            <div className="drawer drawer-mobile">
                <input id="dashboardToggle" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet/>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardToggle" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                        <li><Link to='/dashboard/make_admin'>Make Admin</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;