import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { HeaderFooterNeeded } from "../../../actions/login";
import PreLoader from "../../loader";
const PublicRoute = ({component: Component, isLoggedIn ,restricted, ...rest}) => {
    useEffect(() => {
        const routes = [
            "/constant-contact"
        ];
        if (!routes.includes(window.location.pathname) && window.location.pathname.slice(0,7) !== '/verify') {
            rest.dispatch(HeaderFooterNeeded(true));
        }else{
            rest.dispatch(HeaderFooterNeeded(false));
        }
    }, []);
    return (
        <>
        {rest.loader && <PreLoader/>}
        <Route {...rest} render={props => (
            isLoggedIn && restricted ?
                <Redirect to={{
                    pathname: "/customer",
                    state: { from: props.location }
                }} />
                : <Component {...props} />
        )} />
        </>
    );
};
const mapStateToProps = state => {
    return {
        loader: state.loader,
    };
};
export default connect(mapStateToProps)(PublicRoute);