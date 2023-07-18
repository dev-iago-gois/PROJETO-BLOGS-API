const { PostCategory, BlogPost, User, Category } = require('../models');
const { postSchema } = require('../schemas');

const create = async (userId, title, content, categoryIds) => {
  const { error } = postSchema.validate({ title, content, categoryIds });
  if (error) {
    const [status, message] = error.message.split('|');
    return { status, data: { message } };
  }

  const allCategories = await Category.findAll();
  const allCategoriesIds = allCategories.map((category) => category.id);
  const invalidCategories = categoryIds
  .filter((categoryId) => !allCategoriesIds.includes(categoryId));
  if (invalidCategories.length) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }

  const { dataValues } = await BlogPost.create({ title, content, userId });
  categoryIds
    .forEach((category) => PostCategory.create({ postId: dataValues.id, categoryId: category }));
  return { status: 'CREATED', data: { ...dataValues } };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],

});
  return { status: 'SUCCESSFUL', data: [...posts] };
};

module.exports = {
  create,
  getAll,
};
