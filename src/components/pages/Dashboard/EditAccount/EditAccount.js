import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import InputComponent from "../../../InputComponent";
import { connect } from "react-redux";
import UserService from "../../../../util/UserService";
import {UserProfile, LoggedIn, EmptyUserProfile} from "../../../../actions/login";
import PreLoader from "../../../../components/loader";
import cookie from "react-cookie";
const EditAccount = (props) => {
    const [inputs, setInputs] = useState({
        first_name: {
            valid: false,
            value: ""
        },
        last_name: {
            valid: false,
            value: ""
        },
        email: {
            valid: false,
            value: ""
        },
        password: {
            valid: false,
            value: ""
        },
        new_password: {
            valid: false,
            value: ""
        },
        new_password_confirmation: {
            valid: false,
            value: ""
        },
    }
    );
    const [showChangeEmail, setShowChangeEmail] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [allValid, setAllValid] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        // console.log(props,1111111);
        // console.log(props.first_name,props.last_name);
        setInputs({
            ...inputs,
            first_name: {
                ...inputs.first_name,
                value: props.first_name,
                valid: true,
                changeValue: true
            },
            last_name: {
                ...inputs.last_name,
                value: props.last_name,
                valid: true,
                changeValue: true
            },
        });
    }, [props.last_name]);
    useEffect(() => {
        setValidity();
    }, [inputs,showChangeEmail,showChangePassword]);
    useEffect(() => {
        if(props.location.params && props.location.params.changePassword){
            // changePassword();
            setShowChangePassword(!showChangePassword)
        }
    }, [props]);
    const handleChange = (key, value, valid) => {
        let tempData = {
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
            [key]: {
                ...tempData
            }

        });
    };
    const changeEmail = () => {
        let tempInputs = { ...inputs };
        tempInputs['email'] = tempInputs['password'] = {
            valid: false,
            value: "",
        };
        if (showChangeEmail) {
            tempInputs['email']['clearInput'] = tempInputs['password']['clearInput'] = true;
        } else {
            tempInputs['email']['clearInput'] = tempInputs['password']['clearInput'] = false;
        }
        setInputs({ ...tempInputs });
        if (showChangePassword) {
            setShowChangePassword(false);
        }
        setShowChangeEmail(!showChangeEmail);
    };
    const changePassword = () => {
        let tempInputs = { ...inputs };
        tempInputs['password'] = tempInputs['new_password'] = tempInputs['new_password_confirmation'] = {
            valid: false,
            value: "",
        };
        if (showChangePassword) {
            tempInputs['password']['clearInput'] = tempInputs['new_password']['clearInput'] = tempInputs['new_password_confirmation']['clearInput'] = true;
        } else {
            tempInputs['password']['clearInput'] = tempInputs['new_password']['clearInput'] = tempInputs['new_password_confirmation']['clearInput'] = false;
        }
        // console.log(tempInputs,888);
        setInputs({ ...tempInputs });
        if (showChangeEmail) {
            setShowChangeEmail(false);
        }
        setShowChangePassword(!showChangePassword);
    };
    const setValidity = () => {
        const { first_name, last_name, email, password, new_password, new_password_confirmation } = inputs;
        if (showChangeEmail) {
            // console.log(first_name.valid ,last_name.valid ,email.valid ,password.valid);
            setAllValid(first_name.valid && last_name.valid && email.valid && password.valid);
        } else if (showChangePassword) {
            setAllValid(first_name.valid && last_name.valid && password.valid && new_password.valid && new_password_confirmation.valid);
        } else {
            let firstNameChanged = props.first_name !== first_name.value;
            let lastNameChanged = props.last_name !== last_name.value;
            setAllValid(first_name.valid && last_name.valid && (firstNameChanged || lastNameChanged));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        setLoader(true);
        let data = {};
        if (inputs.first_name.value !== props.first_name) {
            data['first_name'] = inputs.first_name.value;
        }
        if (inputs.last_name.value !== props.last_name) {
            data['last_name'] = inputs.last_name.value;
        }
        if (showChangeEmail) {
            data['email'] = inputs.email.value;
            data['password'] = inputs.password.value;
        } else if (showChangePassword) {
            if (inputs.new_password.value !== inputs.new_password_confirmation.value) {
                let err = [];
                err['message'] = 'The password confirmation does not match.';
                setErrorMessages([err]);
                setLoader(false);
                return false;
            }
            data['new_password'] = inputs.new_password.value;
            data['new_password_confirmation'] = inputs.new_password_confirmation.value;
            data['password'] = inputs.password.value;
        }
        // if(Object.keys(data).length === 0){
        //     setSuccessMessage("User data has been successfully updatedddd.");
        //     setTimeout(function() {
        //         setSuccessMessage("");
        //     }, 5000);
        //     setLoader(false);
        //     return false;
        // }
        setSuccessMessage("");
        setErrorMessages([]);
        UserService.post('/edit-user-info', data, props.dispatch)
            .then(response => {
                if (response.errors) {
                    setErrorMessages([...response.errors])
                } else {
                    if (showChangePassword) {
                        setInputs({
                            ...inputs,
                            password: {
                                value: "",
                                valid: false,
                                clearInput: true
                            },
                            new_password: {
                                value: "",
                                valid: false,
                                clearInput: true
                            },
                            new_password_confirmation: {
                                value: "",
                                valid: false,
                                clearInput: true
                            },
                        });
                        setSuccessMessage("User data has been successfully updated.");
                        // console.log(response,'eser petq');
                        let userData = {
                            'email':response.email,
                            'first_name':response.first_name,
                            'last_name':response.last_name
                        }
                        props.dispatch(UserProfile({...userData}));
                    } else if (showChangeEmail) {
                        setSuccessMessage("Please proceed to your inbox to confirm your new email, and log in again.");
                        cookie.remove("Authorization");
                        setTimeout(function () {
                            props.dispatch(EmptyUserProfile());
                            props.dispatch(LoggedIn(false));
                        }, 5000);
                    } else {
                        props.dispatch(UserProfile(response));
                        setSuccessMessage("User data has been successfully updated.");
                    }
                    setTimeout(function () {
                        setSuccessMessage("");
                    }, 5000);
                }
                setLoader(false);
            })
            .catch(err => {
                console.error(err)
            })
    };
    return (
        <>
            {loader && <PreLoader />}
            <div className="edit-container">
                <h1>EDIT ACCOUNT INFORMATION</h1>
                <h2>Account Information</h2>
                {errorMessages.map((errorMessage, key) => {
                    return (
                        <div className="alert alert-danger" role="alert" key={key}>
                            {errorMessage.message}
                        </div>
                    );
                })}
                {successMessage && (
                    <div className="alert alert-success" role="alert">
                        {successMessage}
                    </div>
                )}
                <form action="" onSubmit={handleSubmit} >
                    <div className="item">

                        <label htmlFor="name">First Name</label>
                        <InputComponent
                            type='text'
                            name='first_name'
                            classnames={{ "names": true }}
                            value={inputs.first_name.value}
                            handleChange={handleChange}
                            lettersSpaces={true}
                            required={true}
                            changeValue={inputs.first_name.changeValue}
                            input_key="first_name"
                        />

                        <label htmlFor="lastName">Last Name</label>
                        <InputComponent
                            type="text"
                            name="last_name"
                            classnames={{ "names": true }}
                            value={inputs.last_name.value}
                            handleChange={handleChange}
                            lettersSpaces={true}
                            required={true}
                            changeValue={inputs.last_name.changeValue}
                            input_key="last_name"
                        />

                        <div className="btn-wrapper">
                        </div>
                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <span style={{ marginRight: 10 }} onClick={() => changeEmail()}>
                            {" Change Email "}</span>{' '}
                        <span onClick={() => changePassword()}>
                            {" Change Password"}</span>
                    </div>
                    {showChangeEmail && <h2>Change Email</h2>}
                    {showChangePassword && <h2>Change Password</h2>}
                    <div className="item">

                        {showChangeEmail && <>
                            <label htmlFor="email">Email</label>
                            <InputComponent
                                name="email"
                                type="email"
                                id="email"
                                value={inputs.email.value}
                                handleChange={handleChange}
                                required={true}
                                clearInput={inputs.email.clearInput}
                                input_key="email"
                            />

                            <label htmlFor="password">Current Password</label>
                            <InputComponent
                                name="password"
                                type="password"
                                id="password"
                                value={inputs.password.value}
                                handleChange={handleChange}
                                required={true}
                                clearInput={inputs.password.clearInput}
                                min={8}
                                input_key="password"
                            />
                        </>}

                        {showChangePassword && <>
                            <label htmlFor="password">Current Password</label>
                            <InputComponent
                                name="password"
                                type="password"
                                value={inputs.password.value}
                                handleChange={handleChange}
                                required={true}
                                clearInput={inputs.password.clearInput}
                                min={8}
                                input_key="password"
                            />

                            <label htmlFor="password">New Password</label>
                            <InputComponent
                                name="new_password"
                                type="password"
                                value={inputs.new_password.value}
                                handleChange={handleChange}
                                required={true}
                                clearInput={inputs.new_password.clearInput}
                                min={8}
                                input_key="new_password"
                            />


                            <label htmlFor="password"> Confirm New Password</label>
                            <InputComponent
                                name="new_password_confirmation"
                                type="password"
                                value={inputs.new_password_confirmation.value}
                                handleChange={handleChange}
                                required={true}
                                clearInput={inputs.new_password_confirmation.clearInput}
                                min={8}
                                input_key="new_password_confirmation"
                            />
                        </>}
                        <div className="btn-wrapper">
                            <button
                                style={allValid ?
                                    { opacity: 1 } :
                                    { opacity: 0.36 }}
                                disabled={!allValid}
                            >SAVE</button>
                            <p> <Link to='./' style={{ color: '#333' }} > Go back</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};
const mapStateToProps = state => {
    return {
        first_name: state.userAgent.profile.first_name,
        last_name: state.userAgent.profile.last_name,
    };
};
export default connect(mapStateToProps)(EditAccount);
