const { Category } = require('../models');
const { categorySchema } = require('../schemas');

const create = async (name) => {
  const { error } = categorySchema.validate(name);
  if (error) {
    const [status, message] = error.message.split('|');
    return { status, data: { message } };
  }

  const { dataValues } = await Category.create({ name });
  return { status: 'CREATED', data: { ...dataValues } };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
};

module.exports = {
  create,
  getAll,
};
