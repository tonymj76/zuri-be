/* eslint-disable no-underscore-dangle */
/* eslint-disable new-cap */
/* eslint-disable no-console */
const { isEmpty, isEmail } = require('validator');
// const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ZuriTrainingModel = require('../models/ZuriTrainingModel');
const { JWTKey } = require('../config');
const { responseHandler } = require('../utils/responseHandler');


// Admin Login
const getZuriTraining = async (req, res) => {
    //fetch all zuri training data
    // by @ajibadeabd 
    const ZuriTraining = await ZuriTrainingModel.find({},{__v:0})
    if(!ZuriTraining) { responseHandler(res, 'error occur while fecting zuri Traning data');}
      else{

    responseHandler(res, 'all zuritraining data fetch', 200, true, {ZuriTraining});
    }

  
};



module.exports = {
    getZuriTraining
};
