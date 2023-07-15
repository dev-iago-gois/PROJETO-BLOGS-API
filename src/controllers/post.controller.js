const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  // TODO refatorar todo esse codigo
  const { title, content, categoryIds } = req.body;
  const newPost = await postService.create(title, content, categoryIds);
  return res.status(mapStatusHTTP.CREATED).json(newPost);
};

const getAll = async (_req, res) => {
  const { status, data } = await postService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
};
