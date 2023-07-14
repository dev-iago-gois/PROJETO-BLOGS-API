const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const userData = req.body;
  const { status, data } = await userService.createUser(userData);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await userService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
};
