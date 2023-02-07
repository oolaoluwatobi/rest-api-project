const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user Schema & model
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 100
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 100
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true,
  },

})

const User = mongoose.model('user', UserSchema);

module.exports = User;