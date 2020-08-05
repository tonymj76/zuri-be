const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { MentorObject } = require('./Mentor');

const { Schema } = mongoose;

const zuriInternMentorSchema = Schema({
  ...MentorObject
}, {
  timestamps: true
});
zuriInternMentorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('ZuriInternMentor', zuriInternMentorSchema);
