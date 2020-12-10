import React, { useState, useEffect, useCallback } from 'react';
import InputComponent from "../../InputComponent/index";
import { Link } from 'react-router-dom'
import './style.scss'
import CallService from "../../../util/CallService";
import PreLoader from "../../../components/loader";
const initialInputs = {
    first_name: {
        valid:false,
        value:''
    },
    last_name: {
        valid:false,
        value:''
    },
    email: {
        valid:false,
        value:''
    },
    password: {
        valid:false,
        value:''
    },
    password_confirmation: {
        valid:false,
        value:''
    },
};
const CustomerSignUp = () => {
    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [allValid, setAllValid] = useState(false);
    const [loader, setLoader] = useState(false);
    const [inputs, setInputs] = useState({...initialInputs});
    useEffect(() => {
        setInputsValidity();
    }, [inputs]);
    const handleChange = (key,value,valid) => {
        let tempData = {
            valid:valid,
            value:value
        };
        if(inputs[key]['clearInput']){
            tempData['clearInput'] = false;
        }
        setInputs({
            ...inputs,
            [key]:{
                ...tempData
            }
        });
    };
    const setInputsValidity = () => {
        let valid = true;
        for(let input in inputs){
            if(!inputs[input]['valid']){
                valid = false;
                break;
            }
        }
        setAllValid(valid);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setLoader(true);
        setErrorMessages([]);
        if(!allValid){
            return false;
            setLoader(false);
        }
        if(inputs.password.value !== inputs.password_confirmation.value){
            let err = [];
            err['message'] = 'The password confirmation does not match.';
            setErrorMessages([err]);
            setLoader(false);
            return false;
        }
        let data = {};
        for(let input in inputs){
            data[input] = inputs[input]['value'];
        }
        CallService.post("/register", data)
            .then(data => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setLoader(false);
                if(data.errors){
                    setErrorMessages([...data.errors]);
                }else if(data.message){
                    setSuccessMessage(data.message);
                    let tempInputs = {...initialInputs};
                    for(let key in tempInputs){
                        tempInputs[key]['clearInput'] = true;
                    }
                    setInputs({...tempInputs});
                    setTimeout(function() {
                        setSuccessMessage("");
                    }, 5000);
                }
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
        <>
            {loader && <PreLoader />}
            <div className="container-sign-up">
                <h1>Create New Customer Account</h1>
                <div className="wrapper">
                    <form action="" onSubmit={handleSubmit} >
                        {errorMessages.map((errorMessage, key) => {
                            return (
                                <div className="alert alert-danger" role="alert" key={key} style={{margin:'10px'}}>
                                    {errorMessage.message}
                                </div>
                            );
                        })}
                        {successMessage && (
                            <div className="alert alert-success" role="alert" style={{margin:'10px'}}>
                                {successMessage}
                            </div>
                        )}
                        <div className="item">
                            <h2>Personal Information</h2>
                            <label htmlFor="first_name">First Name</label>
                            <InputComponent
                                name="first_name"
                                type="text"
                                id="firstName"
                                value={inputs.first_name.value}
                                classnames={{"names":true}}
                                handleChange={handleChange}
                                required={true}
                                lettersSpaces={true}
                                clearInput={inputs.first_name.clearInput}
                                input_key="first_name"
                            />
                            <label htmlFor="last_name">Last Name</label>
                            <InputComponent
                                name="last_name"
                                type="text"
                                id="last-name"
                                value={inputs.last_name.value}
                                classnames={{"names":true}}
                                handleChange={handleChange}
                                required={true}
                                lettersSpaces={true}
                                clearInput={inputs.last_name.clearInput}
                                input_key="last_name"
                            />
                            <p>Sign Up for Newsletter</p>
                            <div className="btn-wrapper">
                            </div>
                        </div>

                        <div className="item">
                            <h2>Sign-in Information</h2>
                            <label htmlFor="email">Email</label>
                            <InputComponent
                                name="email"
                                type="email"
                                id="email"
                                value={inputs.email.value}
                                required={true}
                                handleChange={handleChange}
                                clearInput={inputs.email.clearInput}
                                input_key="email"
                            />
                            <label htmlFor="password">Password</label>
                            <InputComponent
                                name="password"
                                type="password"
                                id="password"
                                value={inputs.password.value}
                                required={true}
                                handleChange={handleChange}
                                min={8}
                                clearInput={inputs.password.clearInput}
                                input_key="password"
                            />
                            <label htmlFor="password_confirmation">Confirm Password</label>
                            <InputComponent
                                name="password_confirmation"
                                type="password"
                                value={inputs.password_confirmation.value}
                                required={true}
                                handleChange={handleChange}
                                id="confirmPassword"
                                min={8}
                                clearInput={inputs.password_confirmation.clearInput}
                                input_key="password_confirmation"
                            />
                            <p>Sign Up for Newsletter</p>
                            <div className="btn-wrapper">
                                <button
                                    style={allValid ?
                                        { opacity: 1 } :
                                        { opacity: 0.36 }}
                                    disabled={!allValid}
                                >Create an Account</button>
                                <p> <Link to='./customer-login' style={{ color: '#333' }} > Back</Link> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CustomerSignUp;
