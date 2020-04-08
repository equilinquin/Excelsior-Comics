const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length > 8, "Password should be longer."]
  },

  favorites: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length > 8, "Password should be longer."]
  },

  userCreated: {
    type: Date,
    default: Date.now
  },

});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, 10);
};
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;