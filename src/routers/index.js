import React, { lazy, Suspense, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Switch, withRouter } from 'react-router-dom';
import PrivateRoute from "../components/pages/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/pages/PublicRoute/PublicRoute";
import PreLoader from "../components/loader";
const CustomerLogin = lazy(() => import("../components/pages/CustomerLogin/CustomerLogin"));
const Homepage = lazy(() => import("../components/pages/Homepage"));
const About = lazy(() => import("../components/pages/About/About"));
const Category = lazy(() => import("../components/pages/Category/category"));
const Terms = lazy(() => import("../components/pages/Terms/Terms"));
const PrivacyPolicy = lazy(() => import("../components/pages/PrivacyPolicy/PrivacyPolicy"));
const Contact = lazy(() => import("../components/pages/Contact/Contact"));
const TrackOrders = lazy(() => import("../components/pages/TrackOrders/TrackOrders"));
const AdvancedSearch = lazy(() => import("../components/pages/AdvancedSearch/AdvancedSearch"));
const AssociatedVendors = lazy(() => import("../components/pages/AssociatedVendors/AssociatedVendors"));
const CustomerService = lazy(() => import("../components/pages/CustomerService/CustomerService"));
const ConstantContact = lazy(() => import("../components/pages/ConstantContact/ConstantContact"));
const CustomerSignUp = lazy(() => import("../components/pages/CustomerSignUp/CustomerSignUp"));
const VerifyUser = lazy(() => import("../components/pages/VerifyUser/VerifyUser"));
const VerifyNewsletter = lazy(() => import("../components/pages/VerifyNewsletter/VerifyNewsletter"));
const ForgotPassword = lazy(() => import("../components/pages/ForgotPassword/ForgotPassword"));
// const AddToCart = lazy(() => import("../components/pages/AddToCart/AddToCart"));
const ShoppingCart = lazy(() => import("../components/pages/ShoppingCart/ShoppingCart"));
const Blogs = lazy(() => import("../components/pages/Blogs/Blogs"));
const Dashboard = lazy(() => import("../components/pages/Dashboard/Dashboard"));
const Checkout = lazy(() => import("../components/pages/Checkout/Checkout"));
// const EditAccount = lazy(() => import("../components/pages/Dashboard/EditAccount/EditAccount"));
// const AddressBook = lazy(() => import("../components/pages/Dashboard/AddressBook/AddressBook"));
// const MyOrders = lazy(() => import("../components/pages/Dashboard/MyOrders/MyOrders"));
// const NewsletterSubscriptions = lazy(() => import("../components/pages/Dashboard/NewsletterSubscriptions/NewsletterSubscriptions"));
// const StoredPaymentMethods = lazy(() => import("../components/pages/Dashboard/StoredPaymentMethods/StoredPaymentMethods"));
// const MyProductReviews = lazy(() => import("../components/pages/Dashboard/MyProductReviews/MyProductReviews"));
// const MyWishList = lazy(() => import("../components/pages/Dashboard/MyWishList/MyWishList"));
const SetPassword = lazy(() => import("../components/pages/SetPassword/SetPassword"));



const Index = props => {



  let history = useHistory();




  useEffect(() => {
    return history.listen((location) => {
      window.scrollTo(0, 0);

    });
  }, [history]);






  return (
    <Suspense fallback={<PreLoader />}>
      <Switch>
        {/*<Fragment>*/}
        {/*<div className="main-root-container">*/}
        {/*{window.location.pathname !== '/constant-contact' &&*/}
        {/*<div>*/}
        {/*{windowWidth > 989 ?*/}
        {/*<NavigationBar /> :*/}
        {/*<NavBarMobile />}*/}
        {/*</div>}*/}
        {/*//public routes that are always accessible*/}
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Blogs} path="/blogs" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Blogs} path="/blogs/:category" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Blogs} path="/blog/:id" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Blogs} path="/blogs/:category/:page" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={TrackOrders} path="/track-orders" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={ShoppingCart} path="/shopping-cart" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={AdvancedSearch} path="/advanced-search" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={CustomerService} path="/customer-service" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={ConstantContact} path="/constant-contact" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={AssociatedVendors} path="/associated-vendors" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={(props) => (<Category {...props} />)} path="/categories/:category" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={(props) => (<Category {...props} />)} path="/types/:category/:type" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={(props) => (<Category {...props} />)} path="/subcategories/:category/:type/:subcategory" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Homepage} path="/" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={About} path="/about" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Terms} path="/terms" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={PrivacyPolicy} path="/privacy" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Contact} path="/contact" exact />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Checkout} path="/checkout" />

        {/*//public, restricted routes when users can access when not logged in*/}
        <PublicRoute restricted={true} isLoggedIn={props.userLogin} component={CustomerLogin} path="/customer-login" exact />
        <PublicRoute restricted={true} isLoggedIn={props.userLogin} component={CustomerSignUp} path="/customer-sign-up" exact />
        <PublicRoute restricted={true} isLoggedIn={props.userLogin} component={ForgotPassword} path="/forgot-password" exact />
        <PublicRoute restricted={true} isLoggedIn={props.userLogin} component={VerifyUser} path="/verify/:email/:id" />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={VerifyNewsletter} path="/verify-newsletter/:email/:id" />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={SetPassword} path="/set-password/:email/:token" />


        {/*private routes that are accessible when user is logged in*/}
        <PrivateRoute exact path="/customer" component={Dashboard} isLoggedIn={props.userLogin} />
        {/*<PrivateRoute exact path="/customer/edit-account" component={Dashboard} isLoggedIn={props.userLogin}/>*/}

        <PrivateRoute exact path="/customer/edit-account" component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/address-book' component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/address/edit/:id' component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/my-orders' component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/newsletter' component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/payment-methods' component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/product-reviews' component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/my-wish-list' component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/my-wish-list/share' component={Dashboard} isLoggedIn={props.userLogin} />
        <PrivateRoute exact path='/customer/user/addresses' component={Dashboard} isLoggedIn={props.userLogin} />
        <PublicRoute restricted={false} isLoggedIn={props.userLogin} component={Homepage} />
        {/*{window.location.pathname !== '/constant-contact' && <Footer />}*/}
        {/*</div>*/}
        {/*</Fragment>*/}
      </Switch>
    </Suspense>
  );
};

export default withRouter(Index);