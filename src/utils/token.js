const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
const { JWT_SECRET } = process.env;

const createToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  createToken,
  verifyToken,
};
