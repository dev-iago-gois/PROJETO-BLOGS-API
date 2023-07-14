const route = require('express').Router();
const { categoryController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');

route.post('/', tokenValidation, categoryController.create);
route.get('/', tokenValidation, categoryController.getAll);

module.exports = route;
