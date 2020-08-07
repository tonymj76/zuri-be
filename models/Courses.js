const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }

});

courseSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Admins', courseSchema);
