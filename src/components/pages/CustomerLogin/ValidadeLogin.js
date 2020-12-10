export const ValidateEmail = value => {
    let isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return isValid.test(String(value).toLowerCase());
}

export const ValidatePassword = value => {
    let isValid;
    if (value.length > 4) {
        isValid = true
    } else {
        isValid = false
    }
    return isValid
}

export const ValidateName = value => {
    let isValid;
    if (value.length > 0) {
        isValid = true
    } else {
        isValid = false
    }
    return isValid;
}

export const ValidatePhoneNumber = value => {
    var numbers = /^[0-9]+$/;
    if (value.match(numbers) && value.length > 7 ) {
        return true
    }else {
        return false;
    }
}

export const ValConfirmPassword = (password, confirmPassword) => {
    let isValid;
    if (confirmPassword === password) {
        isValid = true
    } else {
        isValid = false
    }
    return isValid;
}

