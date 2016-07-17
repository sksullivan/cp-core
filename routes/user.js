var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json('respond with a resource');
});

module.exports = router;
