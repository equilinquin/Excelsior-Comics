const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    favorites: {
        type: Object,
<<<<<<< HEAD
        default: {
            comics: [],
            characters: []
        }
=======
        default: [
            comics: [],
            characters: []
        ]
>>>>>>> master
  },

  userCreated: {
    type: Date,
    default: Date.now
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
