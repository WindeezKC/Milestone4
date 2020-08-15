const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./controllers/indexController');
const userCon = require('./controllers/userController');
const login = require('./controllers/loginController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/connection/assets', express.static(path.join(__dirname, 'assets')));
app.use(session({secret: 'password'}));
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/connection', userCon);
app.use('/login', login)
app.use('/' || '/index', index);

app.listen(8084, function(){
    console.log('App listening on 8084');
});