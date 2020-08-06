const express = require('express');

const router = express.Router();
const {
  getAllInterns
} = require('../controller/zuriInternController');

const {
  internshipMentorApplication,
  applicationValidationRules,
  getAllMentorApplication,
  getSingleMentorApplication
} = require('../controller/internshipMentorController');

// Internship mentor routes
router.post('/mentors/apply', applicationValidationRules(), internshipMentorApplication);
router.get('/mentors', getAllMentorApplication);
router.get('/mentors/:id', getSingleMentorApplication);
router.get('/intern', getAllInterns);


module.exports = router;