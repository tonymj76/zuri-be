const jwt = require('jsonwebtoken');
const { JWTKey } = require('../config');
const { responseHandler } = require('./responseHandler');
const Admins = require('../models/Admin');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    responseHandler(res, 'unauthorized access');
  }

  try {
    jwt.verify(token, JWTKey, (err, decoded) => {
      if (err) {
        responseHandler(res, 'unauthorized access');
      }
      req.adminId = decoded.id;

      Admins.findOne({ _id: decoded.id })
        .then((admin) => {
          req.admin = admin;
        })
        .then(() => next());
    });
  } catch {
    responseHandler(res, 'unauthorized access');
  }
};

module.exports = verifyToken;
