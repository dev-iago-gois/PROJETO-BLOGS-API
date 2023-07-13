const { userSchema } = require('../schemas');
const { User } = require('../models');
const { createToken } = require('../utils/token');

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

module.exports = {
  createUser,
};
