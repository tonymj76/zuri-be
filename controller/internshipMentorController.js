const { body, validationResult } = require('express-validator');
const Mentor = require('../models/ZuriInternMentorModel');
const { responseHandler } = require('../utils/responseHandler');

// Application rules
const applicationValidationRules = () => [
  body('firstName').isString(),
  body('lastName').isString(),
  body('email').isEmail(),
  body('phoneNumber').isMobilePhone(),
  body('cvLink').optional().isURL()
];

const internshipMentorApplication = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    const message = `${err[0].msg} in ${err[0].param}`;
    return responseHandler(res, message, 400);
  }

  const { email } = req.body;
  try {
    // check if the email is already in use
    const mentor = await Mentor.findOne({ email });
    if (mentor) {
      return responseHandler(res, 'Email address already used for application', 400, true);
    }
    // create the new mentor application
    let newMentor = new Mentor(req.body);
    // save the application
    newMentor = await newMentor.save();
    // return the response on success
    return responseHandler(res, ' Application successful', 201, true, { mentor: newMentor });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  applicationValidationRules,
  internshipMentorApplication
};
