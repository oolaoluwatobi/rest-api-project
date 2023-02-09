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
    unique: true,
    required: true,
    validate: {
      validator: function(value) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: "Invalid email format"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128,
    validate: {
      validator: function(value) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
      },
      message: "Password must be at least 8 characters long and contain at least one letter and one number"
    },
  }

})

const User = mongoose.model('user', UserSchema);

module.exports = User;