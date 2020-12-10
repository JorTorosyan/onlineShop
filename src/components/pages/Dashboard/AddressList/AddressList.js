import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import './style.scss';
import UserService from "../../../../util/UserService";
import { AddressExistsChange } from '../../../../actions/login';
import { createListOfAddress } from './helper';
import RedLinkButton from '../../../Buttons/RedLinkButton/RedLinkButton';
import LinkButton from '../../../Buttons/LinkButton/LinkButton';
import { DeleteModal } from '../../../DeleteModal/DeleteModal';
import NetralButton from '../../../Buttons/NetralButton/NetralButton';

function AddressList() {
    const [data, setData] = useState('');
    const [loadingAddress, setLoadingAddress] = useState(false);
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);
    const [deleteData, setDeleteData] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        let mounted = true;
        if (!visible) {
            const fetchData = async () => {
                setLoadingAddress(true);
                try {
                    const result = await UserService.get(`/addresses`);
                    if (mounted) {
                        if (result.errors) {
                            setError(result.errors);
                        } else {
                            setData(result.data);
                        }
                    }
                } catch (e) {
                    setError('something went wrong');
                }
                setLoadingAddress(false);
            };
            fetchData();
        }

        return () => mounted = false;
    }, [visible]);

    const billingArr = data && data.filter(el => el.billing_type);
    const shippingArr = data && data.filter(el => el.shipping_type);
    const addidionalArr = data && data.filter(el => el.billing_type === 0 && el.shipping_type === 0);


    if (loadingAddress) {
        return (
            <div className="load_content">
                <Loader
                    className='loader'
                    type="Oval"
                    color="#ae1d14"
                    height={320}
                    width={40}
                />
            </div>
        );
    }

    const deleteAddress = async (id) => {
        setLoadingAddress(true);
        try {
            const result = await UserService.post(`/delete/address/${id}`);
            if (result.errors) {
                setError(result.errors);
            } else {
                setDeleteData(result.data);
            }
        } catch (e) {
            setError('something went wrong');
        }
        setLoadingAddress(false);
    };

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = (id) => {
        deleteAddress(id);
        setVisible(false);
    };
    const handleCancel = () => {

        setVisible(false);
    };

    return (
        <div className="address_list">
            <div className="my-dashboard-container">
                <h1>ADDRESS BOOK</h1>
                <h2>Default Addresses</h2>
                <div className="section">
                    <div className="contact-info">
                        <h3>Default Billing Address</h3>
                        {createListOfAddress(billingArr, false) && createListOfAddress(billingArr, false).map((el, i) => (
                            <p key={i} style={i === 0 ? { display: 'none' } : { display: 'block' }}
                                className="addressItem">{el}</p>
                        ))}
                        <div className="link_btn_wrap">
                            <LinkButton
                                _onClick={() => dispatch(AddressExistsChange(false))}
                                text='Change Billing Address'
                                path={'/customer/address/edit/' + createListOfAddress(billingArr, false)[0]}
                            />
                        </div>
                    </div>
                    <div className="contact-info rigth">
                        <h3>Default Shipping Address</h3>
                        {createListOfAddress(shippingArr) && createListOfAddress(shippingArr).map((el, i) => (
                            <p key={i} style={i === 0 ? { display: 'none' } : { display: 'block' }}
                                className="addressItem">{el}</p>
                        ))}
                        <div className="link_btn_wrap">
                            <LinkButton
                                text='Change Shipping Address'
                                _onClick={() => dispatch(AddressExistsChange(false))}
                                path={'/customer/address/edit/' + createListOfAddress(shippingArr, false)[0]}
                            />
                        </div>
                    </div>
                </div>
                <div className="addres-book">

                </div>
                <h2>Additional Address Entries</h2>
                <div className="section" >
                    {createListOfAddress(addidionalArr, true) && createListOfAddress(addidionalArr, true).map((arr, i) => (
                        <div className={`contact-info ${i % 2 === 0 ? '' : ' rigth'}`} key={i}>
                            <h3>Default Billing Address</h3>
                            {arr && arr.map((el, i) => (
                                <p key={i} style={i === 0 ? { display: 'none' } : { display: 'block' }}
                                    className="addressItem">{el}</p>
                            ))}
                            <div className="link_btn_wrap">
                                <LinkButton
                                    text='Edit Address'
                                    path={'/customer/address/edit/' + arr[0]}
                                    _onClick={() => dispatch(AddressExistsChange(false))}
                                />
                                <div style={{ marginLeft: 10 }}>
                                    <NetralButton
                                        text='Delete Address'
                                        _onClick={(e) => showModal()}
                                    />

                                    <DeleteModal
                                        message={'are you sure to delete this address'}
                                        // err={copyState.errors}
                                        handleOk={(e) => handleOk(arr[0])}
                                        visible={visible}
                                        handleCancel={handleCancel}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <RedLinkButton
                    path='/customer/address-book'
                    _onClick={() => dispatch(AddressExistsChange(false))}
                    text="ADD NEW ADDRESS"
                />
            </div>
        </div >
    );
}

export default AddressList;;
