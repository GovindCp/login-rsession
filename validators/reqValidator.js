const validate = require("validate.js");

var constraints = {
    "userRegistration":{
        "name":{
            "presence":true
        },
        "age":{
            "presence":true
        },
        "address":{
            "presence":true
        },
        "email": {
            "presence": true
        }
    },
    "login":{
        "email": {
            "presence": true,
            "length": {
                "maximum": 75
            },
            "email": {
                "message": "Not a valid email"
            }
        },
        "password": {
            "presence":true
        }
    },
    "forgotPasswordValidator":{
        "email": {
            "presence": true,
            "length": {
                "maximum": 75
            },
        }
    },
    "verifyOtpValidator":{
        "email": {
            "presence": true,
            "length": {
                "maximum": 75
            },
        },
        "otp": {
            "presence": true,
            "length": {
                "maximum": 8
            },
        },
        "newPassword": {
            "presence": true
        },
        "confirmPassword": {
            "presence": true,
            "equality":"newPassword"
        },
    },
    "updateProfile":{
    }
};

module.exports.userRegValidate = function (body) {
    return validate.async(body, constraints.userRegistration);
};

module.exports.loginValidator = function (body) {
    return validate.async(body, constraints.login);
};

module.exports.forgotPasswordValidator = function (body) {
    return validate.async(body, constraints.forgotPasswordValidator);
};

module.exports.verifyOtpValidator = function (body) {
    return validate.async(body, constraints.verifyOtpValidator);
};

module.exports.updateProfileValidator = function (body) {
    return validate.async(body, constraints.updateProfile);
};
