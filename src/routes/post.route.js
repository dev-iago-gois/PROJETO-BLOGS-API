const route = require('express').Router();
const { postController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');

route.post('/', tokenValidation, postController.create);
route.get('/', tokenValidation, postController.getAll);

module.exports = route;
