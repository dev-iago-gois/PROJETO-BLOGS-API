const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.create(name);
  console.log(data);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await categoryService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
};