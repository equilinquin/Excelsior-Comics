const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');
const secret = 'appname-secret';

router.post('/signup', (req, res) => {
    console.log('User signed up');

    const { firstName, lastName, email, password } = req.body;

    User.findOne({ email: email}, (err, user) => {
        if (err) {
            console.log(err)
        } else if (user) {
            res.json({
                error: `Account already exists with email: ${email}`
            })
        } else {
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            newUser.save((err, saveUser) => {
                if (err) return res.json(err);
                res.json(saveUser);
            })
        }
    })
})

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

router.post('/login', (req, res, next) => {
    console.log(req.body);

    const email = req.body.email;
    // Issue token
    const payload = { email };
    const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
    });
    res.cookie('token', token, { httpOnly: true })
      .sendStatus(200);
    next();
},
    passport.authenticate("local"),
    (req, res) => {
        console.log(req.user);
        let userInfo = {
            email: req.user.email,
            password: req.user.password
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res) => {
    if (req.user) {
        res.json({user: req.user});
    } else {
        res.json({user: null});
    }
})

router.get("/logout", function(req, res) {
    res.clearCookie('token').send('cookie has been deleted');
 });

// router.post('/logout', (req, res) => {
//     if (req.user) {
//         req.logout();
//         res.send({msg: 'Logging out'});
//     } else {
//         res.send({ msg: 'No account to log out'});
//     }
// })

module.exports = router;