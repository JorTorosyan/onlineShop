import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


function PaymentMethod() {
    return (
        <div className="item payment-method">
            <h3>PAYMENT METHOD</h3>
            <div className="content payment-column">
                <label>
                    <input type="radio" name="payment" />Credit Card (Braintree)</label>
                <label htmlFor="">
                    <input type="radio" name="payment" />
                    <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-medium.png" alt="" />
                    <span>PayPal Checkout</span>
                    <Link to="">What is PayPal?</Link>
                </label>
            </div>
        </div>
    );
}

export default PaymentMethod;
