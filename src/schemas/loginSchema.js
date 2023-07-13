const joi = require('joi');

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
}).messages({
    'any.required': 'BAD_REQUEST|Some required fields are missing',
    'string.empty': 'BAD_REQUEST|Some required fields are missing',
    'string.min': 'BAD_REQUEST|Some required fields are missing',
    'string.email': 'BAD_REQUEST|Some required fields are missing',
    });

module.exports = loginSchema;