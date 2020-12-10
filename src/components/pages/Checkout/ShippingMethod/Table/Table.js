import React from 'react';
import './style.scss';

function Table() {
    return (
        <table className="table-checkout-shipping-method">
            <thead>
                <tr className="row">
                    <th className="col col-method" data-bind="i18n: 'Select Method'">Select Method</th>
                    <th className="col col-price" data-bind="i18n: 'Price'">Price</th>
                    <th className="col col-method" data-bind="i18n: 'Method Title'">Method Title</th>
                    <th className="col col-carrier" data-bind="i18n: 'Carrier Title'">Carrier Title</th>
                </tr>
            </thead>
            <tbody>
                <tr className="row" data-bind="click: $parent.selectShippingMethod">
                    <td className="col col-method">
                        <input type="radio" />
                    </td>
                    <td className="col col-price">
                        <span className="price"><span className="price" data-bind="text: getFormattedPrice(method.price_excl_tax)">$417.36</span></span> </td>
                    <td className="col col-method" data-bind="text: method.method_title, attr: {'id': 'label_method_' + method.method_code + '_' + method.carrier_code}" id="label_method_INTERNATIONAL_ECONOMY_fedex">International Economy</td>
                    <td className="col col-carrier" data-bind="text: method.carrier_title, attr: {'id': 'label_carrier_' + method.method_code + '_' + method.carrier_code}" id="label_carrier_INTERNATIONAL_ECONOMY_fedex">Remedy Shipping</td>
                    <td className="col col-price">
                    </td>
                </tr>
                <tr className="row" data-bind="click: $parent.selectShippingMethod">
                    <td className="col col-method">
                        <input type="radio" />
                    </td>
                    <td className="col col-price">
                        <span className="price">
                            <span className="price" data-bind="text: getFormattedPrice(method.price_excl_tax)">$429.46</span></span>
                    </td>
                    <td className="col col-method" data-bind="text: method.method_title, attr: {'id': 'label_method_' + method.method_code + '_' + method.carrier_code}" id="label_method_INTERNATIONAL_PRIORITY_fedex">International Priority</td>
                    <td className="col col-carrier" data-bind="text: method.carrier_title, attr: {'id': 'label_carrier_' + method.method_code + '_' + method.carrier_code}" id="label_carrier_INTERNATIONAL_PRIORITY_fedex">Remedy Shipping</td>
                    <td className="col col-price">
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
