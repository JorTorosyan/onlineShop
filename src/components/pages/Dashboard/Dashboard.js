import React, { useState, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.scss';

import AccountNavbar from "./AccountNavbar/AccountNavbar";
import EditAccount from "./EditAccount/EditAccount";
import MyDashboard from "./MyDashboard/MyDashboard";
import AddressBook from "./AddressBook/AddressBook";
import MyOrders from "./MyOrders/MyOrders";
import NewsletterSubscriptions from "./NewsletterSubscriptions/NewsletterSubscriptions";
import StoredPaymentMethods from "./StoredPaymentMethods/StoredPaymentMethods";
import MyProductReviews from "./MyProductReviews/MyProductReviews";
import MyWishList from "./MyWishList/MyWishList";
import AddressList from "./AddressList/AddressList";
import ShareWishList from "./ShareWishList/ShareWishList";


const Dashboard = (props) => {
  // console.log(props,'dashboardic');

  return (
    <div className='dashboard-container' >
      <div className="navbar-content">
        <AccountNavbar />
      </div>
      <div className="my-dashbord-content">
        <Switch>
          <Route path="/customer" component={MyDashboard} exact />
          <Route path="/customer/edit-account" component={EditAccount} exact />
          <Route path='/customer/address-book' component={AddressBook} exact />
          <Route path='/customer/my-orders' component={MyOrders} exact />
          <Route exact path='/customer/newsletter' component={NewsletterSubscriptions} />
          <Route path='/customer/payment-methods' component={StoredPaymentMethods} exact />
          <Route exact path='/customer/newsletter' component={NewsletterSubscriptions} />
          <Route path='/customer/product-reviews' component={MyProductReviews} exact />
          <Route path='/customer/my-wish-list' component={MyWishList} exact />
          <Route path='/customer/product-reviews' component={MyProductReviews} exact />
          <Route path='/customer/address/edit/:id' component={AddressBook} exact />
          <Route exact path='/customer/user/addresses' component={AddressList} />
          <Route exact path='/customer/my-wish-list/share' component={ShareWishList} />
        </Switch>
      </div>

    </div>
  );
};
export default Dashboard;
