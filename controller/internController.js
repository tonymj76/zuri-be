/* eslint-disable new-cap */
/* eslint-disable no-console */
const { isEmpty, isEmail } = require('validator');
const { body, validationResult } = require('express-validator');
const Intern = require('../models/Intern');

const internApplicationValidationRules = () => [
  body('firstName').isString(),
  body('lastName').isString(),
  body('email').isEmail(),
  body('country').isString(),
  body('state').isString(),
  body('track').isString(),
  body('employmentStatus').isString(),
  body('gender').isString(),
  body('dob').isString(),
  body('phoneNumber').isLength({ min: 10 }),
  
];
// intern general validation
const generalValidation = (req, res, next) => {
  const { firstName, lastName, email, country, state,track,employmentStatus,gender,dob,phoneNumber} = req.body;
  if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(country) || isEmpty(state) || isEmpty(track) || isEmpty(employmentStatus) || isEmpty(gender) || isEmpty(dob) || isEmpty(phoneNumber) ) {
    return res.status(400).json({
      status:'error',
      message:'All fields are required'
    })
  }
  if (!isEmail(email)) {
    return res.status(400).json({
      status:'error',
      message:'Enter a valid email address'
    })
  }
  next();
};

const createIntern = async(req, res, next) => {
  await generalValidation()
  const {
    firstName, lastName, email, country, state,track,employmentStatus,gender,dob,phoneNumber
  } = req.body;
  const errors = validationResult(req);
  const err = errors.array();
  err.forEach((er) => {
    const message = `${er.msg} in ${er.param}`;
    req.flash('error', message);
  });

    try {
      const checkIntern = await Intern.findOne({ email })
      if(checkIntern) return res.status(200).json({
        status:'error',
        message:'Record already exist'
      })
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
          const recordSave = await intern.save()
          if(!recordSave) return res.status(400).json({
            status:'error',
            message:'Error occured creating an intern profile'
          })

          return res.status(200).json({
            status:'success',
            message:'Record successfully saved'
          })

    } catch (error) {
      return res.status(500).json({
        status:'error',
        message:'An error occured'
      })
    }

    }

module.exports = {
  createIntern,
  internApplicationValidationRules
};
