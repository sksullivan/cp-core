'user strict';


module.exports = {
  listUser,
  newUser,
};


const mongoose = require('mongoose');
const User = mongoose.model('User');

function listUser (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(user);
    }
  });
}

function newUser (req, res) {
  console.log("New user requested");
  const newUser = new User(req.body);
  newUser.save(function (err, product, count) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(product);
    }
  });
}
