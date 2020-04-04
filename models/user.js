const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
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

  userCreated: {
    type: Date,
    default: Date.now
  },

});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.validPassword = (passwordHash) => {
  return bcrypt.compareSync(passwordHash, this.password);
};

UserSchema.virtual("password").set((value) => {
  this.password = bcrypt.hashSync(value, 10);
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
