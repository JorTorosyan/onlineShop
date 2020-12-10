import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HeaderFooterNeeded } from '../../../actions/login';

import './style.scss';
import ShippingAddress from './ShippingAddress/ShippingAddress';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import ItemInCard from './ItemInCard/ItemInCard';
import ShippingMethod from './ShippingMethod/ShippingMethod';

function Checkout() {
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        if (window.location.pathname === '/checkout') {
            dispatch(HeaderFooterNeeded(false));
        }
    }, [dispatch]);

    return (
        <div className="checkout_container">
            <div className="container">
                <h1>Checkout</h1>
                <p className="header">Please enter your details below to complete your purchase</p>
                <div className="wrapper">
                    <ShippingAddress />
                    <div className="shipping">
                        <ShippingMethod />
                        <PaymentMethod />
                    </div>
                    <ItemInCard />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
