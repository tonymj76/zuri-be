const express = require('express');

const {
    getZuriTraining
} = require('../controller/zuriTraniningController');

const router = express.Router();
// fetch all zuri inern end point 
router.get('/getZuriTraining', getZuriTraining);

module.exports = router;
