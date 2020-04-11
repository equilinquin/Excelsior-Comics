const express = require("express");
const cors = require("cors");
//const session = require("express-session");
const mongoose = require("mongoose");
const Marvel = require("marvel");
const axios = require("axios");
const path = require("path");
const passport = require("passport");
const router = require("./routes/api");
const User = require("./models/user");
const LocalStrategy = require("passport-local").Strategy;

// Configure Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

passport.use(new LocalStrategy({usernameField: 'email'}, User.authenticate()))

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/excelsiordb");

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes

app.use('/user', router);



// Create an instance of the Marvel API library for use in API routes
const marvel = new Marvel(
  {
    // to-do: conceal these keys from view on GIT / production server
    publicKey: "4ec17a1ab75056cbf248564f7f463990",
    privateKey: "f6588b5911e153c8d42e62044dc91d2af43e8b90"
  }
);

// Find a character by name
app.get("/api/characters/name/:name", (req, res) => {
  const { name } = req.params;
  marvel.characters.nameStartsWith(name).get((err, characters) => {
    if (err) {
      return res.json(err);
    }
    res.json(characters);
  });
});

// Find a character by ID
app.get("/api/characters/id/:id", (req, res) => {
  const { id } = req.params;
  marvel.characters.id(id).get((err, character) => {
    if (err) {
      return res.json(err);
    }
    res.json(character);
  });
});

// Find a comic by title
app.get("/api/comics/title/:title", (req, res) => {
  const { title } = req.params;
  marvel.comics.titleStartsWith(title).get((err, comics) => {
    if (err) {
      return res.json(err);
    }
    res.json(comics);
  });
});

// Find a comic by ID
app.get("/api/comics/id/:id", (req, res) => {
  const { id } = req.params;
  marvel.comics.id(id).get((err, comic) => {
    if (err) {
      return res.json(err);
    }
    res.json(comic);
  });
});

// Add a character to favorites
app.post("/api/favorites/characters", (req, res) => {
  const { id } = req.body;

  // Search the Marvel API for the character to make sure the character ID is valid
  marvel.characters.id(id).get((err, character) => {
    if (err) {
      return res.json(err);
    }
    // Add the character ID to the user's favorites
    req.user.favorites.characters.push(character.id);

    // Save changes
    req.user.save((err, savedResult) => {
      if (err) {
        return res.json(err);
      }

      // Respond with the saved document as confirmation save was successful
      res.json(savedResult);
    });
  });
});

// Add a comic to favorites
app.post("/api/favorites/comics", (req, res) => {
  const { id } = req.body;

  // Search the Marvel API for the comic to make sure the comic ID is valid
  marvel.comics.id(id).get((err, comic) => {
    if (err) {
      return res.json(err);
    }
    // Add the comic ID to the user's favorites
    req.user.favorites.comics.push(comic.id);

    // Save changes
    req.user.save((err, savedResult) => {
      if (err) {
        return res.json(err);
      }

      // Respond with the saved document as confirmation save was successful
      res.json(savedResult);
    });
  });
});

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
