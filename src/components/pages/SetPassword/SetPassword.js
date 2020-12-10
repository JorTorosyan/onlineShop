import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.scss';
import InputComponent from "../../InputComponent";
import {ChangeLoader} from "../../../actions/loader";
import { connect } from "react-redux";
import CallService from "../../../util/CallService";
const SetPassword = props => {

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState(null);
    const [token, setToken] = useState(null);
    const [inputs,setInputs] = useState({
        password:{
            value: "",
            valid:false
        },
        password_confirmation:{
            value: "",
            valid:false
        }
    })

    useEffect(() => {
        verifyUser();
    }, []);

    const verifyUser = () => {
        props.dispatch(ChangeLoader(true));
        const url = window.location.pathname.substring(
            14,
            window.location.pathname.length
        );
        const email = url.substr(0, url.indexOf("/"));
        const token = url.substr(url.indexOf("/") + 1, url.length);
        CallService.get('/get-set-password/'+email+'/'+token)
            .then(data => {
                props.dispatch(ChangeLoader(false));
                if (data.errors) {
                    props.history.push({ pathname: "/customer-login", errors: data.errors });
                }
                setToken(token);
                setEmail(email);
            })
            .catch(err => {
                console.error(err);
            });
    };
    const handleChange = (key, value, valid) => {
        let tempData = {
            ...inputs[key],
            valid: valid,
            value: value
        };
        if (inputs[key]['clearInput']) {
            tempData['clearInput'] = false;
        }
        if (inputs[key]['changeValue']) {
            tempData['changeValue'] = false;
        }
        setInputs({
            ...inputs,
            [key]:{
                ...tempData
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch(ChangeLoader(true));
        setSuccessMessage("");
        setErrorMessage("");
        CallService.post("/set-password", {
            'password' : inputs.password.value,
            'password_confirmation' : inputs.password_confirmation.value,
            'email' : email,
            'token' : token
        })
            .then(data => {
                props.dispatch(ChangeLoader(false));
                if(data.errors){
                    setErrorMessage(data.errors[0]['message']);
                }else if(data.message){
                    props.history.push({ pathname: "/customer-login", data: data});
                }
            })
            .catch(err => {
                props.dispatch(ChangeLoader(false));
                let errors = [];
                errors[0] = [];
                errors[0]['message'] = "Your token has expired.";
                props.history.push({ pathname: "/customer-login", errors: errors });
            });
    };

    return (
        <div className="set-password">
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
            <h1>Set a New Password</h1>
            <div className="wrapper">
                <form action="" onSubmit={handleSubmit} >
                    <div className="item">
                        <div className="wrapper-input-label">
                            <label htmlFor="email">New Password</label>
                            <div className="input-err-message-wrapper">
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
                            </div>
                        </div>
                        <div className="wrapper-input-label">
                            <label htmlFor="email">Confirm New Password</label>
                            <div className="input-err-message-wrapper">
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
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <button
                                style={(inputs.password.valid && inputs.password_confirmation.valid) ?
                                    { opacity: 1 } :
                                    { opacity: 0.36 }}
                                disabled={!inputs.password.valid || !inputs.password_confirmation.valid}
                            >Set a new Password</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default connect()(SetPassword);
