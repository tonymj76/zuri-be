/* eslint-disable new-cap */
/* eslint-disable no-console */
const { body, validationResult } = require('express-validator');
const Intern = require('../models/zuriTrainingModel');

const internApplicationValidationRules = () => [
  body('firstName').isString().not().isEmpty(),
  body('lastName').isString().not().isEmpty(),
  body('email').isEmail().not().isEmpty(),
  body('country').isString().not().isEmpty(),
  body('state').isString().not().isEmpty(),
  body('track').isString().not().isEmpty(),
  body('employmentStatus').isString().not().isEmpty(),
  body('gender').isString().not().isEmpty(),
  body('dob').isString().not().isEmpty(),
  body('phoneNumber').isLength({ min: 10 }).not().isEmpty()

];
const createIntern = async (req, res) => {
  const {
    firstName, lastName, email, country, state, track, employmentStatus, gender, dob, phoneNumber
  } = req.body;

  try {
    const errors = validationResult(req);
    const err = errors.array();
    const myarray = [];
    err.forEach((er) => {
      const message = `${er.msg} in ${er.param}`;
      myarray.push(message);
    });
    if (myarray.length > 0) {
      return res.status(422).json({
        status: 'error',
        message: myarray
      });
    }
  } catch (error) {
    return false;
  }

  try {
    const checkIntern = await Intern.findOne({ email });
    if (checkIntern) {
      return res.status(200).json({
        status: 'error',
        message: 'Record already exist'
      });
    }
    const intern = new Intern({
      firstName,
      lastName,
      email,
      country,
      state,
      track,
      employmentStatus,
      gender,
      dob,
      phoneNumber
    });
    const recordSave = await intern.save();
    if (!recordSave) {
      return res.status(400).json({
        status: 'error',
        message: 'Error occured creating an intern profile'
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Application Successfully Registered'
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

module.exports = {
  createIntern,
  internApplicationValidationRules
};
