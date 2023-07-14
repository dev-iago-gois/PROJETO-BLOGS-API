const joi = require('joi');

const categorySchema = joi.object({
    name: joi.string().required(),
}).messages({
    'any.required': 'BAD_REQUEST|"{#key}" is required',
    'string.empty': 'BAD_REQUEST|"{#key}" is empty',
    });

module.exports = categorySchema;
