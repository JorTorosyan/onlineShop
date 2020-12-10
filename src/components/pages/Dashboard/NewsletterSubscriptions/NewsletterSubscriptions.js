import React, { useState, useEffect } from 'react';
import './style.scss'
import { connect } from "react-redux";
import UserService from "../../../../util/UserService";
import PreLoader from "../../../../components/loader";
import { UserProfile } from "../../../../actions/login";
const NewsletterSubscriptions = (props) => {
    const [isCheck, setISCheck] = useState(false);
    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    useEffect(() => {
        setISCheck(props.newsletter);
    }, [props.newsletter]);
    const handleChange = e => {
        setISCheck(currentCheck => !currentCheck)
    };
    const handleSave = () => {
        setLoader(true);
        setSuccessMessage("");
        setErrorMessage("");
        UserService.post('/newsletter-subscribe', {'newsletter':isCheck}, props.dispatch)
            .then(response=>{
                debugger;
                if(response.errors){
                    setErrorMessage(response.errors[0]['message'])
                }else{
                    if(!isCheck){
                        props.dispatch(UserProfile({newsletter:isCheck}));
                    }
                    if(isCheck){
                        setISCheck(false);
                    }
                    setSuccessMessage(response.message);
                    setTimeout(function() {
                        setSuccessMessage("");
                    }, 5000);
                }
                setLoader(false);
            })
            .catch(err =>{
                console.error(err)
            });
    };

    return (
        <>
        {loader && <PreLoader/>}
        <div className="news-subsc-container">
            <h1>NEWSLETTER SUBSCRIPTION</h1>
            <h2>Subscription option</h2>
            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div>
            )}
            <div className="generate-sub">
                <input checked={isCheck} type="checkbox" onChange={handleChange} />
                <p onClick={handleChange}  >General Subscription</p>
            </div>
            <button type="button"
                    onClick={handleSave}
                    disabled={isCheck === props.newsletter}
                    style={(isCheck === props.newsletter) ?
                        { opacity: 0.36 } :
                        { opacity: 1 }}
            >SAVE</button>
        </div>
        </>
    )
};
const mapStateToProps = state => {
    return {
        newsletter: state.userAgent.profile.newsletter,
    };
};
export default connect(mapStateToProps)(NewsletterSubscriptions);

