const express = require('express');
const login = require('../models/userDB');

const router = express.Router();



router.get('/', function (req, res) {
  res.render('login');
});

router.post('/', function(req, res) {
  if (login.login(req.body.email, req.body.password)) {
    req.session.login = { name: req.body.email, password: req.body.password };
    res.redirect('/connection/savedConnections');
  } else {
    req.session.login = { name: req.body.email, password: req.body.password };
    res.redirect('/connection/savedConnections');
  }
});

module.exports = router;