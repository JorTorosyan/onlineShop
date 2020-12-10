import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.scss';
import InputComponent from "../../InputComponent";
import {ChangeLoader} from "../../../actions/loader";
import { connect } from "react-redux";
import CallService from "../../../util/CallService";
const ForgotPassword = props => {

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [email,setEmail] = useState({
        value: "",
        valid:false
    })
    
    const handleChange = (key, value, valid) => {
        let tempData = {
            ...email,
            valid: valid,
            value: value
        };
        if (email['clearInput']) {
            tempData['clearInput'] = false;
        }
        if (email['changeValue']) {
            tempData['changeValue'] = false;
        }
        setEmail({
            ...tempData
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.dispatch(ChangeLoader(true));
        setSuccessMessage("");
        setErrorMessage("");
        CallService.post("/forgot-password", {"email":email.value})
            .then(data => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.dispatch(ChangeLoader(false));
                if(data.errors){
                    setErrorMessage(data.errors[0]['message']);
                }else if(data.message){
                    setSuccessMessage(data.message);
                    setEmail({
                        value: "",
                        valid:false,
                        clearInput:true
                    })
                    props.history.push({ pathname: "/customer-login", data: data });
                }
            })
            .catch(err => {
                console.error(err);
            });
    };
  
    return (
        <div className="forgot-password">
            {successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div>
            )}
            {errorMessage &&
            <div className="alert alert-danger" role="alert">
                {errorMessage}
            </div>
            }
            <h1>Forgot Your Password</h1>
            <div className="wrapper">
                <form action="" onSubmit={handleSubmit} >
                    <div className="item">
                        <p>Please enter your email address below to receive a password reset link.</p>
                        <div className="wrapper-input-label">
                            <label htmlFor="email">Email</label>
                            <div className="input-err-message-wrapper">
                                <InputComponent
                                    type="email"
                                    name="client_email"
                                    classnames={{ "names": true }}
                                    value={email.value}
                                    handleChange={handleChange}
                                    required={true}
                                    changeValue={email.changeValue}
                                    clearInput={email.clearInput}
                                    input_key="email"
                                />
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <button
                                style={true ?
                                    { opacity: 1 } :
                                    { opacity: 0.36 }}
                                disabled={!email.valid}
                            >Reset My Password</button>
                            <p> <Link to='/customer-login' style={{ color: '#333' }} >Go Back</Link> </p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default connect()(ForgotPassword);
