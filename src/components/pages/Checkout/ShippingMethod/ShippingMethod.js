import React from 'react';
import Table from './Table/Table';
import './style.scss';

function ShippingMethod() {
    return (
        <div className="item payment-method">
            <h3>SHIPPING METHOD</h3>
            <div className="content payment-column">
                <Table />
                <div className="insurance">Insurance</div>
                <p>You can protect your packages against loss or damage during shipping with insurance.</p>
                <div className="insurance_h"> Insurance</div>
            </div>
            <div className="content payment-column">
                <label htmlFor=""><input type="radio" /> Yes - 1.00%</label>
                <label htmlFor=""><input type="radio" /> No - $0.00</label>
                <div className="btn-wrapper">
                    <button>Applay free</button>
                </div>
            </div>
        </div>
    );
}

export default ShippingMethod;
