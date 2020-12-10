import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Item from 'antd/lib/list/Item';

const AccountNavbar = () => {
    const path = window.location.pathname;
    return (
        <div className='account-navbar-container'>
            <div className="navbar-content">
                <div className="header">ACCOUNT DASHBOARD</div>
                <ul>
                    <li className={path === '/customer' ? 'checked' : null}
                        style={{ marginTop: 15 }}>
                        <Link to='/customer'> Account Dashboard</Link>
                    </li>
                    <li className={path === "/customer/edit-account" ? 'checked' : null}>
                        <Link to="/customer/edit-account"
                        >Account Information</Link>
                    </li>
                    <li className={(path === '/customer/address-book' || path === '/customer/user/addresses') ? 'checked' : null} >
                        <Link to='/customer/address-book'>Address Book</Link>
                    </li>
                    <li className={path === '/customer/my-orders' ? 'checked' : null} >
                        <Link to='/customer/my-orders'>My Orders</Link></li>
                    <li className={path === '/customer/newsletter' ? 'checked' : null}>
                        <Link to='/customer/newsletter'>Newsletter Subscriptions</Link></li>
                    <li className={path === '/customer/payment-methods' ? 'checked' : null}>
                        <Link to='/customer/payment-methods'>Stored Payment Methods</Link></li>
                    <li className={path === '/customer/product-reviews' ? 'checked' : null}>
                        <Link to='/customer/product-reviews'>My Product Reviews</Link></li>
                    <li className={path === '/customer/my-wish-list' ? 'checked' : null}>
                        <Link to='/customer/my-wish-list'>My Wish List</Link></li>
                </ul>
            </div>
        </div>
    );
};
export default AccountNavbar;
