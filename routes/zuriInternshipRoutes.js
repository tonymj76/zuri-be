const express = require('express');

const router = express.Router();

const {
  internshipMentorApplication, applicationValidationRules
} = require('../controller/internshipMentorController');

// Internship mentor routes
router.post('/mentors/apply', applicationValidationRules(), internshipMentorApplication);

module.exports = router;
