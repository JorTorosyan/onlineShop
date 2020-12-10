import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { connect } from "react-redux";
import UserService from "../../../../util/UserService";
import { UserProfile } from "../../../../actions/login";
const MyDashboard = props => {
    const [shippingAddress, setShippingAddress] = useState({});
    const [billingAddress, setBillingAddress] = useState({});
    useEffect(() => {
        getMainAddresses();
    }, []);

    const getMainAddresses = () => {
        UserService.get('/main-addresses', props.dispatch)
            .then(response => {
                if (response.errors) {

                } else {
                    for (let key in response.data) {
                        if (response.data[key]['billing_type']) {
                            setBillingAddress(response.data[key]);
                        }
                        if (response.data[key]['shipping_type']) {
                            setShippingAddress(response.data[key]);
                        }
                    }
                }
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
        <div className="my-dashboard-container">
            <h1>My Dashboard</h1>
            <h2>Account Information</h2>
            <div className="section">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>{props.first_name + ' ' + props.last_name}</p>
                    <p>{props.email}</p>
                    <Link to="/customer/edit-account" style={{ marginRight: '5px' }}>Edit</Link>
                    <Link to={{
                        pathname: "/customer/edit-account",
                        params: {
                            changePassword: true
                        }
                    }}>Change Password</Link>
                </div>
                <div className="contact-info rigth">
                    <h3>Contact Information</h3>
                    {props.newsletter && <p>You are already subscribed to our newsletter.</p>}
                    {!props.newsletter && <p>You aren't subscribed to our newsletter.</p>}
                    <Link to="/customer/newsletter">Edit</Link>
                </div>
            </div>
            <div className="addres-book">
                <h2>Account Information  <Link to='/' >Manage Addresses</Link></h2>
            </div>
            <div className="section">
                <div className="contact-info">
                    <h3>Default Billing Address</h3>
                    {!billingAddress.id && <p className="defaultBillingShipping">You have not set a default billing address.</p>}
                    {billingAddress.firstName && billingAddress.lastName && <p className="addressItem">{billingAddress.firstName} {billingAddress.lastName}</p>}
                    {billingAddress.company && <p className="addressItem">{billingAddress.company}</p>}
                    {billingAddress.address1 && <p className="addressItem">{billingAddress.address1}</p>}
                    {billingAddress.address2 && <p className="addressItem">{billingAddress.address2}</p>}
                    {billingAddress.city_of_address && <p className="addressItem">{billingAddress.city_of_address}{', ' + billingAddress.state_of_address}{', ' + billingAddress.postal_code}</p>}
                    {billingAddress.country_of_address && <p className="addressItem">{billingAddress.country_of_address}</p>}
                    {billingAddress.number && <p className="addressItem">{"T: " + billingAddress.number}</p>}
                    {billingAddress.id && <Link to={"/customer/address/edit/" + billingAddress.id}>Edit address</Link>}
                </div>
                <div className="contact-info rigth"  >
                    <h3>Default Shipping Address</h3>
                    {!shippingAddress.id && <p className="defaultBillingShipping">You have not set a default shipping address.</p>}
                    {shippingAddress.firstName && shippingAddress.lastName && <p className="addressItem">{shippingAddress.firstName} {shippingAddress.lastName}</p>}
                    {shippingAddress.company && <p className="addressItem">{shippingAddress.company}</p>}
                    {shippingAddress.address1 && <p className="addressItem">{shippingAddress.address1}</p>}
                    {shippingAddress.address2 && <p className="addressItem">{shippingAddress.address2}</p>}
                    {shippingAddress.city_of_address && <p className="addressItem">{shippingAddress.city_of_address}{', ' + shippingAddress.state_of_address}{', ' + shippingAddress.postal_code}</p>}
                    {shippingAddress.country_of_address && <p className="addressItem">{shippingAddress.country_of_address}</p>}
                    {shippingAddress.number && <p className="addressItem">{"T: " + shippingAddress.number}</p>}
                    {shippingAddress.id && <Link to={"/customer/address/edit/" + shippingAddress.id}>Edit address</Link>}
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        first_name: state.userAgent.profile.first_name,
        last_name: state.userAgent.profile.last_name,
        email: state.userAgent.profile.email,
        newsletter: state.userAgent.profile.newsletter,
    };
};
export default connect(mapStateToProps)(MyDashboard);
