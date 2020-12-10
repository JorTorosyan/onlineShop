import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import InputComponent from "../../../InputComponent";
import { countries } from "../../../../countries";
import { states } from "../../../../states";
import { connect } from "react-redux";
import PreLoader from "../../../loader";
import { Checkbox } from 'antd';
import UserService from "../../../../util/UserService";
import { AddressExistsChange } from "../../../../actions/login";
import classNames from "classnames";
import { Redirect, Link } from 'react-router-dom';
import LinkButton from '../../../Buttons/LinkButton/LinkButton';



const AddressBook = props => {

    const [loader, setLoader] = useState(false);
    const [allValid, setAllValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [initialBilling, setInitialBilling] = useState(null);
    const [initialShipping, setInitialShipping] = useState("");
    const [id, setId] = useState(null);
    const dispatch = useDispatch();
    const [initialInputs, setInitialInputs] = useState({
        firstName: {
            required: true,
            valid: false,
            value: "",
        },
        lastName: {
            required: true,
            valid: false,
            value: ""
        },
        company: {
            valid: false,
            value: ""
        },
        number: {
            required: true,
            valid: false,
            value: ""
        },
        address1: {
            required: true,
            valid: false,
            value: ""
        },
        address2: {
            valid: false,
            value: ""
        },
        city_of_address: {
            required: true,
            valid: false,
            value: ""
        },
        state_of_address: {
            required: true,
            valid: false,
            value: "Please select a region, state or province."
        },
        postal_code: {
            required: true,
            valid: false,
            value: ""
        },
        country_of_address: {
            required: true,
            valid: true,
            value: "United States"
        },
        billing_type: {
            value: !props.addressExists,
            disabled: false,
        },
        shipping_type: {
            value: !props.addressExists,
            disabled: false
        },
    });
    const [inputs, setInputs] = useState({ ...initialInputs });
    useEffect(() => {
        let mounted = true;
        if (props.match.params.id) {
            setLoader(true);
            setId(props.match.params.id);
            getAddress(props.match.params.id);
        } else {
            setId(null);
            emptyInputs();
        }
        return () => mounted = false;
    }, [props.match.params.id]);

    useEffect(() => {
        let mounted = true;
        setValidity();
        return () => mounted = false;
    }, [inputs]);

    useEffect(() => {
        if (!props.match.params.id) {
            setFirstAndLastName();
        }
    }, [props.lastName]);

    const emptyInputs = () => {
        if (inputs.number.value) {
            let tempInputs = { ...initialInputs };
            let tempData = {};
            for (let key in tempInputs) {
                if (!props[key]) {
                    tempData = {
                        ...tempInputs[key],
                    };
                    tempData['clearInput'] = true;
                    tempInputs[key] = {
                        ...tempData
                    };
                } else {
                    tempData = {
                        ...tempInputs[key],
                        value: props[key],
                        valid: true,
                        changeValue: true,
                    };
                    tempInputs[key] = {
                        ...tempData
                    };
                }
            }
            setInputs({ ...tempInputs });
        }
    };
    const getAddress = id => {
        UserService.get('/address/' + id, props.dispatch)
            .then(response => {
                if (response.data.errors) {
                    props.history.push({ pathname: "/customer/address-book" });
                } else {
                    let tempInputs = { ...initialInputs };
                    let tempData = {};

                    for (let key in tempInputs) {
                        tempData = {
                            ...tempInputs[key],
                        };
                        if (response.data[key] !== null && response.data[key] !== "") {
                            tempData['changeValue'] = true;
                            tempData['value'] = response.data[key];
                            if (tempInputs[key]['valid'] !== undefined) {
                                tempData['valid'] = true;
                            }
                        }
                        tempInputs[key] = {
                            ...tempData
                        };
                    }
                    setInitialBilling(response['data']['billing_type']);
                    setInitialShipping(response['data']['shipping_type']);
                    setInputs({ ...tempInputs });
                }
                setLoader(false);
            })
            .catch(err => {
                console.error(err);
            });
    };
    const setFirstAndLastName = () => {
        setInputs({
            ...inputs,
            firstName: {
                ...inputs.firstName,
                value: props.firstName,
                valid: true,
                changeValue: true
            },
            lastName: {
                ...inputs.lastName,
                value: props.lastName,
                valid: true,
                changeValue: true
            },
        });
    };

    const setValidity = () => {
        let valid = true;
        for (let input in inputs) {
            if (inputs[input]['valid'] === false && (inputs[input]['required'] || inputs[input]['value'] !== '')) {
                // console.log(inputs[input]['valid'],inputs[input]['required'], inputs[input]['value'],input);
                valid = false;
                break;
            }
        }
        setAllValid(valid);
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
            [key]: {
                ...tempData
            }

        });
    };

    const handleSelectChange = (e, key) => {
        let tempInputs = {
            ...inputs,
            [key]: {
                ...inputs[key],
                value: e.target.value,
                valid: true
            },
        };
        let tempObj = {
            ...inputs['state_of_address'],
            required: false
        };
        if (key === 'country_of_address' && e.target.value !== 'United States') {
            setInputs({
                ...tempInputs,
                'state_of_address': {
                    ...tempObj,
                    valid: true
                }
            });
        } else if (key === 'country_of_address' && e.target.value === 'United States') {
            setInputs({
                ...tempInputs,
                'state_of_address': {
                    ...inputs['state_of_address'],
                    required: true,
                    valid: !!inputs['state_of_address']['value']
                }
            });
        } else {
            setInputs({
                ...tempInputs,
            });
        }
    };
    const handleSubmit = (e) => {
        setSuccessMessage("");
        setErrorMessage("");
        e.preventDefault();
        setLoader(true);
        let data = {};
        for (let key in inputs) {
            data[key] = inputs[key]['value'];
        }

        if (!countries.includes(data['country_of_address'])) {
            console.log(countries, data['country_of_address']);
            setErrorMessage("Country has an invalid value.");
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setLoader(false);
            return false;
        }
        if (!states.includes(data['state_of_address'])) {
            setErrorMessage("State has an invalid value.");
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setLoader(false);
            return false;
        }

        //for editing address case
        if (id) {
            if (data['billing_type'] === initialBilling) {
                delete data['billing_type'];
            }
            if (data['shipping_type'] === initialShipping) {
                delete data['shipping_type'];
            }
        }
        const url = !id ? '/address/create' : '/address/edit/' + id;
        UserService.post(url, data, props.dispatch)
            .then(response => {
                if (response.errors) {
                    setErrorMessage(response.errors[0]['message']);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    if (!props.addressExists) {
                        dispatch(AddressExistsChange(true));
                    }

                    //for creating address case
                    if (!id) {
                        let tempInputs = { ...initialInputs };
                        for (let key in tempInputs) {
                            if (props[key] === undefined) {
                                tempInputs[key]['clearInput'] = true;
                            } else {
                                tempInputs[key] = {
                                    ...tempInputs[key],
                                    value: props[key],
                                    valid: true,
                                    changeValue: true
                                };
                            }
                        }
                        setInputs({ ...tempInputs });
                    }
                    setSuccessMessage(response.message);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(function () {
                        setSuccessMessage("");
                    }, 5000);
                }
                setLoader(false);
            })
            .catch(err => {
                console.error(err);
            });
    };
    if (props.addressExists) {
        return <Redirect to='/customer/user/addresses' />;
    }


    const onCheckBoxChange = (e, key) => {
        setInputs({
            ...inputs,
            [key]: {
                ...inputs[key],
                value: e.target.checked,
            }
        });
    };
    let countriesOptions = countries.map((country, index) => <option key={country} value={country}>{country}</option>);

    let statesOptions = states.map(state => state === "Please select a region, state or province." ? (
        <option key={state} value={state} disabled={true}>{state}</option>
    ) : (
            <option key={state} value={state}>{state}</option>
        ));
    return (
        <>
            {loader && <PreLoader />}
            <div className="address-container">
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
                <h1>ADD NEW ADDRESS</h1>
                <h2>Contact Information</h2>
                <form action="" onSubmit={handleSubmit} >
                    <div className="item">

                        <label htmlFor="fName">First Name</label>
                        <InputComponent
                            type="text"
                            name="fName"
                            classnames={{ "names": true }}
                            value={inputs.firstName.value}
                            handleChange={handleChange}
                            lettersSpaces={true}
                            required={true}
                            changeValue={inputs.firstName.changeValue}
                            clearInput={inputs.firstName.clearInput}
                            input_key="firstName"
                        />

                        <label htmlFor="lName">Last Name</label>
                        <InputComponent
                            type="text"
                            name="lName"
                            classnames={{ "names": true }}
                            value={inputs.lastName.value}
                            handleChange={handleChange}
                            lettersSpaces={true}
                            required={true}
                            changeValue={inputs.lastName.changeValue}
                            clearInput={inputs.lastName.clearInput}
                            input_key="lastName"
                        />

                        <label htmlFor="company" className="label-case" >Company</label>
                        <InputComponent
                            type="text"
                            name="company"
                            classnames={{ "names": true }}
                            value={inputs.company.value}
                            handleChange={handleChange}
                            // lettersSpaces={true}
                            changeValue={inputs.company.changeValue}
                            input_key="company"
                            clearInput={inputs.company.clearInput}
                            company={true}
                        />

                        <label htmlFor="number">Phone Number </label>
                        <InputComponent
                            type="number"
                            name="number"
                            classnames={{ "names": true }}
                            value={inputs.number.value}
                            handleChange={handleChange}
                            required={true}
                            number={true}
                            changeValue={inputs.number.changeValue}
                            input_key="number"
                            clearInput={inputs.number.clearInput}
                        />

                        <h2 style={{ marginTop: 35 }}>Address</h2>
                        <label htmlFor="streetAddress1">Street Address</label>
                        <InputComponent
                            type="text"
                            name="streetAddress1"
                            classnames={{ "names": true }}
                            value={inputs.address1.value}
                            handleChange={handleChange}
                            required={true}
                            address={true}
                            changeValue={inputs.address1.changeValue}
                            input_key="address1"
                            clearInput={inputs.address1.clearInput}
                        />
                        <InputComponent
                            type="text"
                            name="streetAddressOther"
                            classnames={{ "names": true }}
                            value={inputs.address2.value}
                            handleChange={handleChange}
                            address={true}
                            changeValue={inputs.address2.changeValue}
                            input_key="address2"
                            clearInput={inputs.address2.clearInput}
                        />

                        <label htmlFor="cityOfAddress">City</label>
                        <InputComponent
                            type="text"
                            name="cityOfAddress"
                            classnames={{ "names": true }}
                            value={inputs.city_of_address.value}
                            handleChange={handleChange}
                            required={true}
                            lettersSpacesDashes={true}
                            changeValue={inputs.city_of_address.changeValue}
                            input_key="city_of_address"
                            clearInput={inputs.city_of_address.clearInput}
                        />

                        <label htmlFor="stateOfAddress" className={classNames({
                            'label-case': !inputs.state_of_address.required
                        })}>State/Province</label>
                        <select className="names" value={inputs.state_of_address.value} onChange={e => handleSelectChange(e, 'state_of_address')}>
                            {statesOptions}
                        </select>

                        <label htmlFor="postCode">Zip/Postal Code </label>
                        <InputComponent
                            type="text"
                            name="postCode"
                            classnames={{ "names": true }}
                            value={inputs.postal_code.value}
                            handleChange={handleChange}
                            required={true}
                            changeValue={inputs.postal_code.changeValue}
                            input_key="postal_code"
                            numbersSpacesDashes={true}
                            clearInput={inputs.postal_code.clearInput}
                        />

                        <label htmlFor="countryOfAddress">Country</label>
                        <select className="names" value={inputs.country_of_address.value} onChange={e => handleSelectChange(e, 'country_of_address')}>
                            {countriesOptions}
                        </select>
                        {props.addressExists &&
                            <>
                                <Checkbox
                                    onChange={e => onCheckBoxChange(e, 'billing_type')}
                                    checked={inputs.billing_type.value}
                                    disabled={inputs.billing_type.disabled}
                                >
                                    Billing
                                </Checkbox>
                                <Checkbox
                                    onChange={e => onCheckBoxChange(e, 'shipping_type')}
                                    checked={inputs.shipping_type.value}
                                    disabled={inputs.shipping_type.disabled}
                                >
                                    Shipping
                                </Checkbox>
                            </>
                        }
                    </div>
                    <div className="buttons_wrap">
                        <button type="submit" style={allValid ?
                            { opacity: 1 } :
                            { opacity: 0.36 }}
                            disabled={!allValid}
                        >
                            Save Address
                    </button>
                        <LinkButton
                            path='/customer/user/addresses'
                            text='Go back'
                        />
                    </div>
                </form>
            </div>
        </>
    );
};
const mapStateToProps = state => {
    return {
        firstName: state.userAgent.profile.first_name,
        lastName: state.userAgent.profile.last_name,
        addressExists: state.userAgent.profile.addressExists,
    };
};
export default connect(mapStateToProps)(AddressBook);