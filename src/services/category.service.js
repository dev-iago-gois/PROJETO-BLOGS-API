const { Category } = require('../models');
const { categorySchema } = require('../schemas');

const create = async (category) => {
  const { error } = categorySchema.validate(category);
  if (error) {
    const [status, message] = error.message.split('|');
    return { status, data: { message } };
  }

  const { name } = category;
  const { dataValues } = await Category.create({ name });
  return { status: 'CREATED', data: { ...dataValues } };
};

module.exports = {
  create,
};
