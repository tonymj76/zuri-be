const express = require('express');
const {
  getAllInterns
} = require('../controller/zuriInternController');

const router = express.Router();

router.get('/intern', getAllInterns);

module.exports = router;
