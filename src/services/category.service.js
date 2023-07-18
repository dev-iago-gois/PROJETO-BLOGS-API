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

const getById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) return { status: 'NOT_FOUND', data: { message: 'Categoria não encontrada' } };
  return { status: 'SUCCESSFUL', data: category };
};

module.exports = {
  create,
  getAll,
  getById,
};
