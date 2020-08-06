const express = require('express');
const {
  createIntern,
  internApplicationValidationRules
} = require('../controller/zuriTrainingApplicationController');

const { createApplication, declineApplication, acceptApplication, allApplication } = require('../controller/mentorTraningController')

const {
  getZuriTraining
} = require('../controller/zuriTraniningController');

const router = express.Router();
// Admin routes
router.post('/zuri/training/application', internApplicationValidationRules(), createIntern);


// mentor routes 

router.post('/mentor/apply', createApplication);
router.patch('/mentor/:id/decline', declineApplication);
router.patch('/mentor/:id/accept', acceptApplication);
router.get('/mentor/applications', allApplication);

// fetch all zuri inern end point 
router.get('/getZuriTraining', getZuriTraining);
module.exports = router;
