const express = require('express');
const {
  createIntern,
  internApplicationValidationRules
} = require('../controller/zuriTrainingApplicationController');

const {
  createApplication, declineApplication, acceptApplication, allApplication
} = require('../controller/mentorTraningController');

const {
  getZuriTraining, findByNameIntern, filterInternTrainingData, findByNameMentor, filterMentorTrainingData
} = require('../controller/zuriTraniningController');

const router = express.Router();
// Admin routes
router.post('/zuri/training/application', internApplicationValidationRules(), createIntern);

// mentor routes

router.post('/mentor/apply', createApplication);
router.patch('/mentor/:id/decline', declineApplication);
router.patch('/mentor/:id/accept', acceptApplication);
router.get('/mentor/applications', allApplication);
router.get('/mentor/:firstName', findByNameMentor);
router.get('/mentor/filter/:filterBy', filterMentorTrainingData);

// Intern routes
router.get('/getZuriTraining', getZuriTraining);
router.get('/intern/:firstName', findByNameIntern);
router.get('/intern/filter/:filterBy', filterInternTrainingData);
module.exports = router;
