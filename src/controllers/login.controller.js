const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const loginData = req.body;
  const { status, data } = await loginService.login(loginData);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
};
