const { verifyToken } = require('../utils/tokenManage');

const tokenValidation = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    // TODO deitei nessa pqp
    const verifiedToken = token.includes('Bearer') ? token.split(' ')[1] : token;
  
    const payload = verifyToken(verifiedToken);
    req.payload = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;
