import React from 'react';

import './style.scss';


function ShippingAddress() {
    return (
        <div className="item">
            <h3>SHIPPING ADDRESS</h3>
            <div className="content first-column">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" />
                <p>You can create an account after checkout.</p>
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
                <label htmlFor="">Company</label>
                <input type="text" />
                <label htmlFor="">Street Adsress</label>
                <input type="text" />
                <input type="text" />
                <label htmlFor="">City</label>
                <input type="text" />
                <label htmlFor="">Country</label>
                <select name="">
                    <option value="">test</option>
                    <option value="">test</option>
                    <option value="">test</option>
                </select>
                <label htmlFor="">State/Province</label>
                <select name="">
                    <option value="">test</option>
                    <option value="">test</option>
                    <option value="">test</option>
                </select>
                <label htmlFor="">Zip/Postal Code</label>
                <input type="number" />
                <label htmlFor="">Phone Number</label>
                <input type="number" />
            </div>
        </div>
    );
}

export default ShippingAddress;
