/**
 * Validates provided value according to rule
 *
 * @param {String} value value to validate
 * @param {String|Array|Object|Number} rules name or array with rule name and rule options
 * @returns {Object}
 */
const numberValidator = value => {
  let re = /^\d+$/;
  if (value === "") {
    return true;
  }
  return re.test(String(value).toLowerCase());
};

const doubleValidator = value => {
  let re = /^\d+(?:\.\d{0,2})$/;
  let regExpNumber = /^\d+$/;
  if (value === "") {
    return true;
  }
  return (
    re.test(String(value).toLowerCase()) ||
    regExpNumber.test(String(value).toLowerCase())
  );
};

const minLengthValidator = (value, minLength) => {
  const notValid = value.length < minLength;
  if (notValid) {
    return {
      isValid: false,
      text: "Please write at least " + minLength + " symbols."
    };
  } else {
    return {
      isValid: true
    };
  }
};

const maxLengthValidator = (value, maxLength) => {
  const notValid = value.length >= maxLength;
  if (notValid) {
    return {
      isValid: false,
      text: "Please write no more than " + maxLength + " symbols."
    };
  } else {
    return {
      isValid: true
    };
  }
};

const requiredValidator = value => {
  if (value.trim() === "") {
    return {
      isValid: false,
      text: "This field is required"
    };
  }
  return {
    isValid: true
  };
};

const numbersLettersValidator = value => {
  if (value === "") {
    return {
      isValid: true
    };
  }
  // let re = /[^A-Za-z0-9]/;
  let re = /^[\w ]+$/;
  return {
    isValid: re.test(String(value).toLowerCase()) && !value.includes("_"),
    text: "The format is invalid."
  };
};

const lettersSpacesValidator = value => {
  if (value === "") {
    return {
      isValid: true
    };
  }
  let re = /^[A-Za-z ]+$/;
  return {
    isValid: re.test(String(value).toLowerCase()),
    text: "The format is invalid."
  };
};

const emailValidator = value => {
  if (value === "") {
    return true;
  }
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const addressValidator = value => {
  if (value !== '') {
    return true;
  }
  let re = /^\s*\S+(?:\s+\S+){2}/;
  return {
    isValid: re.test(String(value)),
    text: "The format is invalid."
  };
};

const lettersSpacesDashesValidator = value => {
  if (value === '') {
    return true;
  }
  let re = /[A-Za-z\s\-]+$/;
  return {
    isValid: re.test(String(value)),
    text: "The format is invalid."
  };
};

const numbersSpacesDashesValidator = value => {
  if (value === '') {
    return true;
  }
  let re = /^(?=.*[0-9])[- 0-9]+$/;
  return {
    isValid: re.test(String(value)),
    text: "The format is invalid."
  };
};

const companyNameValidator = value => {
  if (value === '') {
    return true;
  }
  let re = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/;
  return {
    isValid: re.test(String(value)),
    text: "The format is invalid."
  };
};


const validate = (value, rules) => {
  let errorObject = {
    isValid: true,
    text: ""
  };
  let isValid = errorObject.isValid;
  for (let rule in rules) {
    if (rules[rule]) {
      switch (rule) {
        case "minLength":
          const handleMinValid =
            isValid && minLengthValidator(value, rules[rule]);
          errorObject = {
            isValid: handleMinValid.isValid,
            text: handleMinValid.text
          };
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        case "isRequired":
          errorObject = requiredValidator(value);
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        case "numbersLetters":
          errorObject = numbersLettersValidator(value);
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        case "lettersSpaces":
          errorObject = lettersSpacesValidator(value);
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        case "isAddress":
          errorObject = addressValidator(value);
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        case "maxLength":
          const handleMaxValid =
            isValid && maxLengthValidator(value, rules[rule]);
          errorObject = {
            isValid: handleMaxValid.isValid,
            text: handleMaxValid.text
          };
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        case "isEmail":
          errorObject.isValid = isValid && emailValidator(value);
          // console.log(errorObject.isValid);
          if (!errorObject.isValid) {
            errorObject.text = "The Email format is invalid.";
            return errorObject;
          }
          break;
        case "isNumber":
          errorObject.isValid = isValid && numberValidator(value);
          if (!errorObject.isValid) {
            errorObject.text = "The format should be only numbers";
            return errorObject;
          }
          break;
        case "lettersSpacesDashes":
          errorObject = isValid && lettersSpacesDashesValidator(value);
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        case "numbersSpacesDashes":
          errorObject = isValid && numbersSpacesDashesValidator(value);
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        case "isDouble":
          errorObject.isValid = isValid && doubleValidator(value);
          if (!errorObject.isValid) {
            errorObject.text = "The format should be a valid amount";
            return errorObject;
          }
          break;
        case "isCompany":
          errorObject = isValid && companyNameValidator(value);
          if (!errorObject.isValid) {
            return errorObject;
          }
          break;
        default:
          errorObject.isValid = true;
      }
    }
  }
  return errorObject;
};

export default validate;
