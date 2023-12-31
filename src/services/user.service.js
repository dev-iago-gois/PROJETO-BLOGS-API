const { userSchema } = require('../schemas');
const { User } = require('../models');
const { createToken } = require('../utils/tokenManage');

const createUser = async (userData) => {
  const result = userSchema.validate(userData);

  const { error } = result;
  if (error) {
    const [status, message] = error.message.split('|');
    return { status, data: { message } };
  }
  const { displayName, email, password, image } = userData;
  const verifyEmail = await User.findOne({ where: { email } });
  if (verifyEmail) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const user = await User.create({ displayName, email, password, image });
  const payload = { id: user.id, email, displayName, image };
  const token = createToken(payload);

  return { status: 'CREATED', data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 'SUCCESSFUL', data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
  createUser,
  getAll,
  getById,
};
