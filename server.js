const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const serverData = require('./models/server-data')
const store = require('./models/store');

const routes = require('./routes/index');
const users = require('./routes/user');

var app = module.exports = express();

const config = require('./config/config');
if (!config) {
  process.exit();
}

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users/:userId', users.listUser);
app.post('/users', users.newUser);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    res.status(400).json(err);
});


app.set('port', process.env.PORT || config.port);

store.connect()
  .on('error', console.log)
  .on('disconnected', store.connect)
  .once('open', listen);

function listen () {
  if (app.get('env') === 'test') { return; }
  app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + config.port);
  });
}
