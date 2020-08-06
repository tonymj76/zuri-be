const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { InternObject } = require('./Intern');

const { Schema } = mongoose;

const zuriTrainingSchema = Schema({
  ...InternObject
},
{
  timestamps: true
});

zuriTrainingSchema.plugin(uniqueValidator);
module.exports = mongoose.model('ZuriTraining', zuriTrainingSchema);
