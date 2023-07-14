const { loginSchema } = require('../schemas');
const { User } = require('../models');
const { createToken } = require('../utils/tokenManage');

const login = async (loginData) => {
  const { error } = loginSchema.validate(loginData);
  if (error) {
  const [status, message] = error.message.split('|');

  return { status, data: { message } };
  }

  const { email, password } = loginData;
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }
  const payload = {
    id: user.id,
    email: user.email,
    displayName: user.displayName,
    image: user.image,
  };

  const token = createToken(payload);

  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  login,
};
