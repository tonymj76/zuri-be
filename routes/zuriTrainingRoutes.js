const express = require('express');
const {
  createIntern,
  internApplicationValidationRules
} = require('../controller/zuriTrainingApplicationController');

const {
  createApplication, declineApplication, acceptApplication, allApplication, mentorTraningValidator,
  getSingleMentorApplication
} = require('../controller/mentorTraningController');

const {
  getZuriTraining,
  findByNameIntern,
  filterInternTrainingData,
  findByNameMentor,
  filterMentorTrainingData,
  getZuriTrainingCSV,
  filterInternTrainingDataCSV,
  getZuriMentorCSV,
  filterMentorTrainingDataCSV
} = require('../controller/zuriTraniningController');

const router = express.Router();
// Admin routes
router.post('/zuri/training/application', internApplicationValidationRules(), createIntern);

// mentor routes

router.post('/mentor/apply', mentorTraningValidator(), createApplication);
router.patch('/mentor/:id/decline', declineApplication);
router.patch('/mentor/:id/accept', acceptApplication);
router.get('/mentor/applications', allApplication);
<<<<<<< HEAD
router.get('/mentor/:firstName', findByNameMentor);
router.get('/mentor/filter/:filterBy', filterMentorTrainingData);

// Intern routes
router.get('/getZuriTraining', getZuriTraining);
router.get('/intern/:firstName', findByNameIntern);
router.get('/intern/filter/:filterBy', filterInternTrainingData);
=======
router.get('/mentor/applications/:id', getSingleMentorApplication);
router.get('/mentor/:firstName', findByNameMentor);
router.get('/mentor/filter/:filterBy', filterMentorTrainingData);
// mentor csv routes
router.get('/mentor/all/csv', getZuriMentorCSV);
router.get('/mentor/filter/csv/:filterBy', filterMentorTrainingDataCSV);

// Intern routes
router.get('/intern/all', getZuriTraining);
router.get('/intern/:firstName', findByNameIntern);
router.get('/intern/filter/:filterBy', filterInternTrainingData);
// intern csv route
router.get('/intern/all/csv', getZuriTrainingCSV);
router.get('/intern/filter/csv/:filterBy', filterInternTrainingDataCSV);

>>>>>>> e5ba42befd6ef2e0c9e6591c7f65383936b9a02e
module.exports = router;
