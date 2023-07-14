const joi = require('joi');

const categorySchema = joi.string().required().messages({
    'any.required': 'BAD_REQUEST|"name" is required',
    'string.empty': 'BAD_REQUEST|"name" is empty',
    });

module.exports = categorySchema;
