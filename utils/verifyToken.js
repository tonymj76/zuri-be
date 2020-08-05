const jwt = require('jsonwebtoken');
const { JWTKey } = require('../config');
const { responseHandler } = require('./responseHandler');
const Admins = require('../models/AdminLogin');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    responseHandler(res, 401, false, 'unauthorized access');
  }

  try {
    jwt.verify(token, JWTKey, (err, decoded) => {
      if (err) {
        responseHandler(res, 401, false, 'unauthorized access');
      }
      req.userId = decoded.id;

      Admins.findOne({ _id: decoded.id })
        .then((user) => {
          req.user = user;
        })
        .then((y) => next());
    });
  } catch {
    res.status(401).send({ success: false, message: 'unauthorized access' });
  }
};

module.exports = verifyToken;
