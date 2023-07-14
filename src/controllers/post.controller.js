const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const newPost = await postService.create(title, content, categoryIds);
  return res.status(mapStatusHTTP.CREATED).json(newPost);
};

module.exports = {
  create,
};
