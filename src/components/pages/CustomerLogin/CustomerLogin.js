import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CallService from "../../../util/CallService";
import InputComponent from "../../InputComponent/index";
import cookie from "react-cookie";
import './style.scss';
import { UserProfile, LoggedIn } from "../../../actions/login";
import { connect } from "react-redux";
import { CreateCart } from "../../../actions/cart";
import PreLoader from "../../../components/loader";
const CustomerLogin = (props) => {

     const [inputs, setInputs] = useState({
         email: {
             valid:false,
             value:''
         },
         password: {
             valid:false,
             value:''
         },
     });
    const [errorMessage, setErrorMessage] = useState("");
    const [loader, setLoader] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const handleChange = (name,value,valid) => {
         setInputs({
             ...inputs,
             [name]:{
                 valid:valid,
                 value:value
             }
         });
     };

    useEffect(() => {
        if (props.location.data && props.location.data.message) {
            setSuccessMessage(props.location.data.message)
        }else if(props.location.errors){
            setErrorMessage(props.location.errors[0]['message'])
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setErrorMessage("");
        setSuccessMessage("");
        CallService.login("/login", {
            email: inputs.email.value,
            password: inputs.password.value
        })
            .then(data => {
                setLoader(false);
                if(!data.token){
                    setErrorMessage(data.data.message);
                }else{
                    cookie.save("Authorization", data.token, { path: "/" });
                    props.dispatch(UserProfile(data.data));
                    props.dispatch(LoggedIn(true));
                    props.dispatch(CreateCart({count:data.count, products:data.cart,totalSum:data.totalSum}))
                }
            })
            .catch(err => {

            });

  };


    return (
        <>
            {loader && <PreLoader/>}
            <div className="container-login">
                <h1>Customer Login</h1>
                <div className="wrapper">
                    <form action="" onSubmit={handleSubmit} >

                        <div className="item">
                            <h2>REGISTERED CUSTOMERS</h2>
                            <p>If you have an account, sign in with your email address.</p>
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
                            <label htmlFor="email">Email</label>
                            <InputComponent
                                name="email"
                                type="email"
                                id="email"
                                value={inputs.email.value}
                                handleChange={handleChange}
                                required={true}
                                input_key="email"
                            />
                            <label htmlFor="password">Password</label>
                           <InputComponent
                                name="password"
                                type="password"
                                id="password"
                                value={inputs.password.value}
                                handleChange={handleChange}
                                required={true}
                                min={8}
                                input_key="password"
                           />
                            <div className="btn-wrapper">
                                <button
                                style={(inputs.email.valid && inputs.password.valid) ?
                                 { opacity: 1 } :
                                    { opacity: 0.36 }}
                                disabled={
                                    !inputs.email.valid || !inputs.email.valid
                                }
                                >
                                    Sign in
                                </button>
                                <Link to="/forgot-password">Forgot Your Password</Link>
                            </div>

                            <p className="required">* Required Fields</p>
                        </div>
                    </form>
                    <div className="item">
                        <h2>NEW CUSTOMERS</h2>
                        <p>If you have an account, sign in with your email address.</p>
                        <button> <Link to='./customer-sign-up'> Create An account</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default connect()(CustomerLogin);
