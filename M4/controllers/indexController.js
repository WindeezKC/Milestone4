let express = require('express');
let router = express.Router();
let ConnectionsDB = require('../models/connectionDB');
let connection1 = new ConnectionsDB();
let user = require('../models/userDB');
const loginNav = require('../middleware/login');
router.use(loginNav);
router.post('/signup', function (req, res) {
    user.signup(req.body.first, req.body.last, req.body.email, req.body.password, req.body.city, req.body.zip);
    req.session.login = { name: req.body.email, password: req.body.password };
    res.locals.user = req.session.login;
    res.redirect('/connection/savedConnections');
});
router.get('/signout', function (req, res) {
    req.session.login = null;
    res.redirect('/');
})
router.get('/signup', function(req, res) {
    res.render('signup');
})
router.get('/connections', function(req, res) {
    list = connection1.getConnections();
    res.render('connections', {list:list});
});
router.get('/connection', function(req, res) {
    list = connection1.getConnections();
    res.render('connections', {list:list});
});
router.get('/about', function(req, res) {
    res.render('about');
});
router.get('/newConnection', function(req, res) {
    res.render('newConnection', {qs : req.query});
});
router.get('/contact', function(req, res) {
    res.render('contact');
});
router.get('/', function (req, res) {
    res.render('index');
});
router.get('/index', function (req, res) {
    res.render('index');
});
module.exports = router;

