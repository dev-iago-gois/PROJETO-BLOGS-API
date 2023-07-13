const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const userData = req.body;
  const { status, data } = await userService.createUser(userData);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
};
