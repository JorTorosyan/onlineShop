import React, { useEffect } from "react";
import { connect } from "react-redux";
import CallService from "../../../util/CallService";
import Loader from "../../loader";
import { HeaderFooterNeeded } from "../../../actions/login";
const VerifyUser = props => {
    const url = window.location.pathname.substring(
        8,
        window.location.pathname.length
    );
    const email = url.substr(0, url.indexOf("/"));
    const id = url.substr(url.indexOf("/") + 1, url.length);
    useEffect(() => {
        CallService.put("/verify-user", { email: email, id: id })
            .then(data => {
                props.dispatch(HeaderFooterNeeded(true));
                if (data.errors) {
                    props.history.push({ pathname: "/customer-login", errors: data.errors });
                } else {
                    props.history.push({ pathname: "/customer-login", data: data });
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, []);
    return <Loader />;
};

export default connect()(VerifyUser);
