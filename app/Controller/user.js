'use strict';

// User object and functions that is declared in the controller/user.js file
// Require the Schema and creating the User object
var User = require('../Model/Schemas/User');

/***
  User functions and the logic behind the CRUD Operations
***/
/** create function to create User. */
exports.create = function (req, res) {
  User.create(req.body, function(err, result){
    if (!err) {
      return res.send(result); // Posting the created user
    } else {
      return res.send(err); // Error handling
    }
  });
};

/** get function to get all Users. */
exports.get = function (req, res) {
  User.getAll(req.body, function(err, result){
    if (!err) {
        return res.send(result); // Posting all the users
    } else {
        return res.send(err); // 500 error
    }
  });
};

/** get function to get user by ID */
exports.getbyId = function (req, res) {
  User.get({_id: req.params.id}, function(err, result){
    if (!err) {
      return res.send(result);
    } else {
      return res.send(err);
    }
  });
}

/** update function to update User by id. */
exports.update = function (req, res) {
    User.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** remove function to remove User by id. */
exports.removeById = function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json("User " + result.username + " was removed");
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
