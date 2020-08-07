const express = require('express');

const router = express.Router();

const {
  filterInterns,
  zuriInternValidationRules,
  zuriInternApplication,
  getAllInterns,
  getZuriInternByID
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


// Zuri Intern routes
router.get('/intern', getAllInterns);
<<<<<<< HEAD
router.get('/intern/:id', getZuriInternByID);
router.post('/intern/apply', zuriInternValidationRules(), zuriInternApplication);
=======
router.get('/intern/track', filterInterns);

>>>>>>> 155a91c00ac1c1a6f9a05c973e048bb6e260965a

module.exports = router;