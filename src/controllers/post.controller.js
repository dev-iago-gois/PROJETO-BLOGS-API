const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.payload;
  const { status, data } = await postService.create(id, title, content, categoryIds);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await postService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
};
