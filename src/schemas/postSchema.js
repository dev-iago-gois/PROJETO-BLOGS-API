const joi = require('joi');

const postSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().required(),
}).messages({
    'any.required': 'BAD_REQUEST|Some required fields are missing',
    'string.empty': 'BAD_REQUEST|Some required fields are missing',
    });

module.exports = postSchema;
