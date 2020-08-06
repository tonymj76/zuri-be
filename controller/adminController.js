/* eslint-disable no-underscore-dangle */
/* eslint-disable new-cap */
/* eslint-disable no-console */
const { isEmpty, isEmail } = require('validator');
// const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admins = require('../models/Admin');
const { JWTKey } = require('../config');
const { responseHandler } = require('../utils/responseHandler');
const { passwordHash } = require('../../Utils/password-hash');
const sendEmail = require('../../Utils/send-email');

// const newAdminValidationRules = () => [
//   body('firstName').isString(),
//   body('lastName').isString(),
//   body('email').isEmail(),
//   body('password').isLength({ min: 5 }),
//   body('category').isString(),
//   body('role').isString()
// ];

// Admin Login
const login = (req, res) => {
  const { email, password } = req.body;
  if (isEmpty(email) || isEmpty(password)) {
    responseHandler(res, 'unauthorized access', 401);
  }
  if (!isEmail(email)) {
    responseHandler(res, 'Please enter a valid email');
  }
  Admins.findOne({ email }).then((admin) => {
    if (!admin) {
      responseHandler(res, 'Email does not exist in our record');
      return;
    }
    bcrypt.compare(password, admin.password).then(
      (valid) => {
        if (!valid) {
          responseHandler(res, 'Please enter a valid password');
        }
        const token = jwt.sign(
          { adminId: admin._id },
          JWTKey,
          { expiresIn: '24h' }
        );
        const { name, role, category } = admin;
        responseHandler(res, 'token gen and successful login', 200, true, {
          name,
          email,
          role,
          category,
          authorization: { token }
        });
      }
    ).catch(
      (err) => {
        res.status(501).json({
          error: err
        });
      }
    );
  }).catch((err) => {
    res.status(500).json({
      error: err
    });
  });
};

const logout = (req, res) => {
  responseHandler(res, 'No Logout');
};

const addAdmin = async (req, res) => {
  try {
    const { firstName, lastName, email, password, category } = req.body;
    
    const hashedPassword = await passwordHash(password);
    const newAdmin = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: 'admin',
      category,
    };

    const adminAdded = await newAdmin.save();
    if(!adminAdded){
      return responseHandler(res, 'Unable to create Admin', 401, false);
    }
    // send admin login details
    const link = `${process.env.ZURI_DEV_URL}/login`;
    const details = {
      email,
      subject: 'ZURI Admin Account Details',
      message: `<h5>Login Credentials<h5>
                <p>Email: ${email}<p>
                <p>Password: ${password}<p>
                Click <a href=${link}>here</a> to login`,
    };
    try {
      await sendEmail(details);
      return responseHandler(res, 'Admin created successfully', 200);
    } catch (err) {
      return responseHandler(res, err.message, 500, false);
    }
    
  } catch (error) {
    return responseHandler(res, error.message, 500, false);
  }
  
  



}
module.exports = {
  login,
  logout
};
