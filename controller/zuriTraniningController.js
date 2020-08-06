const ZuriTrainingModel = require('../models/ZuriTrainingModel');
const ZuriTrainingMentorModel = require('../models/ZuriTrainingMentorModel')
const { responseHandler } = require('../utils/responseHandler');

const getZuriTraining = async (req, res) => {
  // fetch all zuri training data
  // by @ajibadeabd
  const ZuriTraining = await ZuriTrainingModel.find({}, { __v: 0 });
  if (!ZuriTraining) { responseHandler(res, 'error occur while fecting zuri Traning data'); } else { responseHandler(res, 'all zuritraining data fetch', 200, true, { ZuriTraining }); }
};

const findByNameIntern = (req, res) => {
  ZuriTrainingModel.find({ firstName: req.params.firstName }).then(result => {
    responseHandler(res, 'Operation successful', 200, true, result)
  }).catch(err => {
    responseHandler(res, 'Something went wrong', 500, false, err)
  })
}

const filterInternTrainingData = (req, res) => {
  const filterBy = req.params.filterBy.toLowerCase()
  ZuriTrainingModel.find({ track: filterBy }).then(result => {
    responseHandler(res, 'Operation successful', 200, true, result)
  }).catch(err => {
    responseHandler(res, 'Something went wrong', 500, false, err)
  })
}

const findByNameMentor = (req, res) => {
  ZuriTrainingMentorModel.find({ firstName: req.params.firstName }).then(result => {
    responseHandler(res, 'Operation successful', 200, true, result)
  }).catch(err => {
    responseHandler(res, 'Something went wrong', 500, false, err)
  })
}

const filterMentorTrainingData = (req, res) => {
  const filterBy = req.params.filterBy.toLowerCase()
  ZuriTrainingMentorModel.find({ track: filterBy }).then(result => {
    responseHandler(res, 'Operation successful', 200, true, result)
  }).catch(err => {
    responseHandler(res, 'Something went wrong', 500, false, err)
  })
}

module.exports = {
  getZuriTraining, filterMentorTrainingData, filterInternTrainingData, findByNameMentor, findByNameIntern
};
