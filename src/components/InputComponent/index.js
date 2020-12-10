import React, { useEffect, useState } from "react";
import classNames from "classnames";
import validate from "../../helpers/validate";
import './style.scss'
const InputComponent = (props) => {
    const [input, setInput] = useState({
        value: "",
        type: "",
        name: "",
        placeholder: "",
        valid: false,
        touched: false,
        errorText: "",
        readOnly: false,
        errorMessage: "",
        key:props.input_key,
        errorNeeded: props.errorNeeded === undefined,
        validationRules: {
            minLength: props.min,
            maxLength: props.max,
            isRequired: !!props.required,
            numbersLetters: !!props.numbersLetters,
            lettersSpaces: !!props.lettersSpaces,
            isNumber: !!props.number,
            isEmail: props.type === 'email',
            isAddress: !!props.address,
            lettersSpacesDashes: !!props.lettersSpacesDashes,
            numbersSpacesDashes: !!props.numbersSpacesDashes,
            isCompany: !!props.company
        }
    });
    useEffect(() => {
        setInput(
            {
                ...input,
                ...props,
                validationRules : {
                    ...input.validationRules,
                }
            }
        );
    }, []);
    useEffect(() => {
        if(props.clearInput){
            setInput(
                {
                    ...input,
                    valid:false,
                    value:"",
                    touched: false

                }
            )
        }
    }, [props.clearInput]);
    useEffect(() => {
        if(props.value && props.changeValue){
            setInput(
                {
                    ...input,
                    valid:true,
                    value:props.value,
                    touched: false
                }
            )
        }
    }, [props.value,props.changeValue]);
    const handleChange = e => {
        const validationRules = {
            ...input.validationRules
        };
        const tempInput = {
            ...input
        };
        const handleValidation = validate(
            e.target.value,
            validationRules
        );
        tempInput.touched = true;
        tempInput.value = e.target.value;
        tempInput.valid = handleValidation.isValid;
        tempInput.errorText = handleValidation.text;
        setInput({
            ...tempInput,
        });
        props.handleChange(tempInput.key,tempInput.value,tempInput.valid);
    };
    return (
        <>
            <input
                 type={input.type}
                 name={input.name}
                 ref={input.ref}
                 placeholder={input.placeholder}
                 value={input.value}
                 onChange={handleChange}
                 readOnly={input.readOnly}
                 className={classNames({
                     ...input.classnames
                 })}
            />
            {(!input.valid && input.touched && input.errorNeeded) &&
                <div className="err-message-wrapper">{input.errorText}</div>
            }
        </>
    );
};
export default InputComponent;
