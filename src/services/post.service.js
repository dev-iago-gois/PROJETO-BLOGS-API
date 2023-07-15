const { PostCategory, BlogPost, User, Category } = require('../models');

const create = async (title, content, categoryIds) => {
  // TODO provavelmetne PostCategory sai
  const newPost = await PostCategory.create({ title, content });
  await newPost.setCategories(categoryIds);
  return newPost;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User,
        as: 'user', 
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],

});
  console.log(posts);
  return { status: 'SUCCESSFUL', data: [...posts] };
};

module.exports = {
  create,
  getAll,
};
