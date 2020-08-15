let express = require('express');
let router = express.Router();
let ConnectionsDB = require('../models/connectionDB');
let Profile = require('../models/userProfile');
let loginNav = require('../middleware/login');
let user;
let curCon;
let connection1;


router.get('/rsvp/:rsvp', function(req, res) {
    if (res.locals.user != null) {
        let rsvp = req.params.rsvp;
        user.updateRSVP(rsvp, curCon)
        res.redirect('/connection/savedConnections');
      } else {
        res.redirect('/login');
      }
});
router.get('/savedConnections', function (req, res) {
    user = new Profile(res.locals.user.name)
    res.render('savedConnections', {list: user.getConnections()});
});
router.get('/delete/:id', function(req, res) {
    let id = req.params.id;
    let con = user.getConnection(id);
    console.log(con);
    user.removeConnection(con);
    res.redirect('/connection/savedConnections');
});
router.get('/:id', function(req, res) {
    let con = new ConnectionsDB();
    let ID = req.params.id;
    connection1 = con.getConnection(ID);
    curCon = connection1;
    res.render('connection', {connection: connection1});
});
module.exports = router;