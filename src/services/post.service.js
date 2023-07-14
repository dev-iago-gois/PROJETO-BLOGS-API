const { PostCategory } = require('../models');

const create = async (title, content, categoryIds) => {
  const newPost = await PostCategory.create({ title, content });
  await newPost.setCategories(categoryIds);
  return newPost;
};

module.exports = {
  create,
};
