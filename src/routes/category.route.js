const route = require('express').Router();
const { categoryController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');

route.post('/', tokenValidation, categoryController.create);

module.exports = route;
