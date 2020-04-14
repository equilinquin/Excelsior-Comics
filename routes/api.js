const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const jwt = require('jsonwebtoken');
const secret = 'appname-secret';

const withAuth = function(req, res, next) {
  const token = 
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token'] ||
      req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}
router.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  // Issue token
  const payload = { email };
  const token = jwt.sign(payload, secret, {
    expiresIn: '24h'
  });
  res.cookie('token', token, { httpOnly: true })
    .sendStatus(200);
  next();

  console.log("signing up user");
  User.register(
    new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.email,
    }),
    req.body.password,
    function (err,user) {
      if (err) {
        console.log("error while user register!", err);
        return next(err);
      }
      console.log("user registered!");
      return res.json({...user, salt:null, hash:null});
      
    }
    
  );
});

router.post('/user_data', (req, res) => {
  User.findOne({ email: req.body.email }).then(data => {
    res.json(data);
  })
})

router.post("/login", 
passport.authenticate("local"), function (req, res) {

    const email = req.body.email;
    // Issue token
    const payload = { email };
    const token = jwt.sign(payload, secret, {
      expiresIn: '24h'
    });
    res.cookie('token', token, { httpOnly: true })
      .sendStatus(200);

      console.log("login success");
  //res.redirect("/");
});

router.get("/logout", function(req, res) {
  res.clearCookie('token').send('cookie has been deleted');
});


module.exports = router;

