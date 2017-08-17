'use strict';

// User object and functions that is declared in the controller/user.js file
// Require the Schema and creating the User object
var UserSchema = require('../Model/Schemas/User');

/***
  User functions and the logic behind the CRUD Operations
***/
/** create function to create User. */
exports.create = function (req, res) {
  UserSchema.create(req.body, function(err, result){
    if (!err) {
      return res.send(result); // Posting the created user
    } else {
      return res.send(err); // Error handling
    }
  });
};

/** get function to get all Users. */
exports.get = function (req, res) {
  UserSchema.getAll(req.body, function(err, result){
    if (!err) {
        return res.send(result); // Posting all the users
    } else {
        return res.send(err); // 500 error
    }
  });
};

/** get function to get user by ID */
exports.getbyId = function (req, res) {
  UserSchema.get({_id: req.params.id}, function(err, result){
    if (!err) {
      return res.send(result);
    } else {
      return res.send(err);
    }
  });
};

/** update function to update User by id. */
exports.update = function (req, res) {
  console.log(req.params.id);
  UserSchema.findOneAndUpdate(req.params.id, {$set: req.body}, {new: true, runValidators: true, upsert: true}, function(err, result){
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
};

/** remove function to remove User by id. */
exports.removeById = function (req, res) {
    UserSchema.findByIdAndRemove({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.send("User " + result.username + " was removed");
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
};
