const Joi = require("joi");

exports.signUpValidation = ({ username, email, password }) => {
    let schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string()

            // .pattern(
            //     new RegExp(
            //         "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,12}$"
            //     )
            // )

            .required(),
    });
    let { error } = schema.validate({ username, email, password });
    return error;
};
const passwordVal = function (password) {
    var strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,12}$"
    );
    /*at least 1 lowercase, at least 1 uppercase,contain at least 1 numeric character,
    at least one special character, range between 6-12*/
    return strongRegex.test(password);
};
