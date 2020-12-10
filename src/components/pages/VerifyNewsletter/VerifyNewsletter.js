import React, { useEffect } from "react";
import CallService from "../../../util/CallService";

const VerifyNewsletter = props => {
    const url = window.location.pathname.substring(
        19,
        window.location.pathname.length
    );
    const email = url.substr(0, url.indexOf("/"));
    const id = url.substr(url.indexOf("/") + 1, url.length);
    useEffect(() => {
        CallService.put("/verify-newsletter", { email: email, id: id })
            .then(data => {
                if (data.errors) {
                    props.history.push({ pathname: "/", errors: data.errors });
                } else {
                    props.history.push({ pathname: "/", data: data });
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, []);
    return <></>;
};

export default VerifyNewsletter;
