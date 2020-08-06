const express = require('express');

const router = express.Router();
const {
  getAllInterns
} = require('../controller/zuriInternController');

const {
  internshipMentorApplication,
  applicationValidationRules
} = require('../controller/internshipMentorController');

// Internship mentor routes
router.post('/mentors/apply', applicationValidationRules(), internshipMentorApplication);
router.get('/intern', getAllInterns);


module.exports = router;