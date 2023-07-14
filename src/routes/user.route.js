const route = require('express').Router();
const { userController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');

route.post('/', userController.create);
route.get('/', tokenValidation, userController.getAll);

module.exports = route;
