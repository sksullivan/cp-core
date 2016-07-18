var express = require('express');
var router = express.Router();

var serverData = require("../models/server-data");

/* GET home page. */

router.get('/', function(req, res) {
  res.status(200).json({ ApiVersion: serverData.version });
});

module.exports = router;
