'use strict';


module.exports = {
  connect,
};


const config = require('../config/config');
const mongoose = require('mongoose');
require('./user');

/* Returns a Mongoose connection */
function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect(config.dbAddr, options).connection;
}
