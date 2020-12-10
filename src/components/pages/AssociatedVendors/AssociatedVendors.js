
import React from 'react';
import { CompareProduct } from '../../CompareProduct/CompareProduct';
import { HeaderMemo } from '../../../components/Header/Header';
import './style.scss';


const AssociatedVendors = () => {
    const category = "Associated Vendors";

    return (
        <>
            <HeaderMemo category={category} />
            <div className="associated-container">
                <div className="img-content">
                    <p>For All of your Bartending Need Contact:</p>
                    <p><a href="www.crystalbartenders.com">www.crystalbartenders.com</a></p>
                    <div className="text">
                        <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/./IMG_0468_1_.jpg" alt="IMG_0468_1_.jpg" />
                    </div>
                </div>
                <CompareProduct />
            </div>
        </>
    );
};
export default AssociatedVendors;