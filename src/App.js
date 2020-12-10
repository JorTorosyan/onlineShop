import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers';
import './index.css';
import { connect } from "react-redux";
import CallService from './util/CallService';
import { UserProfile, LoggedIn } from "./actions/login";
import { CreateCart } from "./actions/cart";
import PreLoader from "./components/loader";
import NavigationBar from './components/navigationBar/navigationBar';
import NavBarMobile from './components/navBarMobile';
import Footer from './components/Footer';
import cookie from "react-cookie";

const App = props => {
    const [loader, updateLoader] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.screen.width);

    const handleWindowResize = () => {
        setWindowWidth(window.screen.width);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        const loadCookie = cookie.load("Authorization");
        if (!loadCookie) {
            props.dispatch(LoggedIn(false));
            if (localStorage.getItem('cart') === null) {
                localStorage.setItem('cart', JSON.stringify({ 'count': 0, 'products': [], 'totalSum': 0 }));
            }
            props.dispatch(CreateCart(JSON.parse(localStorage.getItem('cart'))));
            updateLoader(true);
            return;
        }
        CallService.authorization("/get-authenticated-user")
            .then(json => {
                if (
                    json.data.errors &&
                    json.data.errors[0] &&
                    json.data.errors[0].code &&
                    json.data.errors[0].code === 401
                ) {
                    cookie.remove("Authorization");
                    if (localStorage.getItem('cart') === null) {
                        localStorage.setItem('cart', JSON.stringify({ 'count': 0, 'products': [], 'totalSum': 0 }));
                    }
                    props.dispatch(CreateCart(localStorage.getItem('cart')));
                    props.dispatch(LoggedIn(false));
                    updateLoader(true);
                } else {
                    props.dispatch(LoggedIn(true));
                    props.dispatch(UserProfile(json.data));
                    props.dispatch(CreateCart({ count: json.count, products: json.cart, totalSum: json.totalSum }));
                    updateLoader(true);
                }
            })
            .catch(err => {
                // cookie.remove("Authorization");
                props.dispatch(LoggedIn(false));
                updateLoader(true);
            });
    }, []);



    return loader ? (
        <BrowserRouter>
            <div className="main-root-container">
                {props.headerFooterNeeded &&
                    <>
                        {windowWidth > 989 ?
                            <NavigationBar /> :
                            <NavBarMobile />}
                    </>}
                <Routers userLogin={props.login} onUpdate={() => window.scrollTo(0, 0)} />
                {props.headerFooterNeeded && <Footer />}
            </div>
        </BrowserRouter>
    ) : (
            <PreLoader />
        );
};

const mapStateToProps = state => {
    return {
        login: state.userAgent.login,
        headerFooterNeeded: state.userAgent.headerFooterNeeded,
    };
};
export default connect(mapStateToProps)(App);
