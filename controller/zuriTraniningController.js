const ZuriTrainingModel = require('../models/ZuriTrainingModel');
const { responseHandler } = require('../utils/responseHandler');

const getZuriTraining = async (req, res) => {
  // fetch all zuri training data
  // by @ajibadeabd
  const ZuriTraining = await ZuriTrainingModel.find({}, { __v: 0 });
  if (!ZuriTraining) { responseHandler(res, 'error occur while fecting zuri Traning data'); } else { responseHandler(res, 'all zuritraining data fetch', 200, true, { ZuriTraining }); }
};

module.exports = {
  getZuriTraining
};
