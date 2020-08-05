const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { MentorObject } = require('./Mentor');

const { Schema } = mongoose;

const zuriTrainingMentorSchema = Schema({
  ...MentorObject
}, {
  timestamps: true
});
zuriTrainingMentorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('ZuriTrainingMentor', zuriTrainingMentorSchema);
