import React from 'react';
import { warning } from '../../../../assets/img';
import './style.scss';


const MyOrders = ({ text = 'You have placed no orders.', marginT }) => {
    return (
        <div className={`my-orders-container ` + marginT} >
            <h1>MY ORDERS</h1>
            <div className="message-info">
                <img src={warning} alt="warning" />
                <span>{text}</span>
            </div>
        </div>
    );
};
export default MyOrders;
