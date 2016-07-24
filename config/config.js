'use strict';


var fs = require('fs');
var path = require('path');

function init () {
  if (process.argv.length < 3) {
    console.error("Please specify environment configuration. Falling back on 'dev'");
    process.argv[2] = 'dev';
  }
  const env = process.argv[2];
  const envAbsPath = path.join(__dirname, env) + '.js';
  const envRelPath = path.join('.', env) + '.js';
  console.log("Loading", env, "environement from "+ envAbsPath +"...");
  try {
    fs.accessSync(envAbsPath);
  } catch (e) {
    console.error("Specified environment does not exist.");
    return;
  }
  module.exports = require(envAbsPath);
}

init();
