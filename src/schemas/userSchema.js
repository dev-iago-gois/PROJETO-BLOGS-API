const joi = require('joi');

const userSchema = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string().required(),
}).messages({
    'any.required': 'BAD_REQUEST|a',
    'string.empty': 'BAD_REQUEST|b',
    'string.min': 'BAD_REQUEST|"{#key}" length must be at least {#limit} characters long',
    'string.email': 'BAD_REQUEST|"{#key}" must be a valid email',
    });

module.exports = userSchema;
