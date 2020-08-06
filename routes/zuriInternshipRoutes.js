const express = require('express');

const router = express.Router();

const {
  internshipMentorApplication,
  applicationValidationRules,
  getAllMentorApplication,
  getSingleMentorApplication
} = require('../controller/internshipMentorController');

// Internship mentor routes
router.post('/mentors/apply', applicationValidationRules(), internshipMentorApplication);
router.get('/mentors', getAllMentorApplication);
router.get('/mentors/:Id', getSingleMentorApplication);
module.exports = router;
