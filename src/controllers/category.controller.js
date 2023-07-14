const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const category = req.body;
  const { status, data } = await categoryService.create(category);
  console.log(data);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
};