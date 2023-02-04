var jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenMiddleware = (req, res, next) => {
  let token;
  try {
    token = req.headers['authorization'].split(' ')[1];
  } catch (e) {
    token = '';
  }
  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized!' });
    } else {
      req.user = decoded;
      next();
    }
  });
};
module.exports = tokenMiddleware;
