function validatePIN(pin) {
    //return true or false
    let regexPin = /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
    return regexPin
}