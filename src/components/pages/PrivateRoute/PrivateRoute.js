import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { HeaderFooterNeeded } from "../../../actions/login";
import PreLoader from "../../loader";
const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => {
    useEffect(() => {
        const routes = [
            "/constant-contact"
        ];
        if (!routes.includes(window.location.pathname)) {
            rest.dispatch(HeaderFooterNeeded(true));
        }else{
            rest.dispatch(HeaderFooterNeeded(false));
        }
    }, []);
    return (
        <>
            {rest.loader && <PreLoader/>}
            <Route {...rest} render={props => (
                isLoggedIn ?
                    <Component {...props} />
                : <Redirect to={{
                    pathname: "/customer-login",
                    state: { from: props.location }
                }} />
            )} />
        </>
    );
};
const mapStateToProps = state => {
    return {
        loader: state.loader,
    };
};
export default connect(mapStateToProps)(PrivateRoute);

