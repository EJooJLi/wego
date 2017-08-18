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
      return res.send(result);
    } else {
      return res.send(err);
    }
  });
};

/** get function to get all Users. */
exports.get = function (req, res) {
  User.find(req.body, function(err, result){
    if (!err) {
        return res.send(result); // Posting all the users
    } else {
        return res.send(err); // 500 error
    }
  });
};

/** get function to get user by ID */
exports.getbyId = function (req, res) {
  User.findOne({_id: req.params.id}, function(err, result){
    if (!err) {
      return res.send(result);
    } else {
      return res.send(err);
    }
  });
};

/** update function to update User by id. */
exports.update = function (req, res) {
  // User.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {runValidators: true, setDefaultsOnInsert: true, "new": true}, function(err, result){
  //   if (!err) {
  //     return res.send(result);
  //   } else {
  //     return res.send(err);
  //   }
  // });
  User.findOne({_id: req.params.id}, function(err, userOfInterest){
    if (err){
      return res.send(err);
    } else {
      User.update(userOfInterest, req.body, function(err, result){
        return res.send(result);
      });
    }
    // req.body.password = res.body.password;
    // req.save(function(err){
    //   if (err) {
    //     return res.send(err);
    //   } else {
    //     return res.send(result);
    //   }
    // });
  });
};
//{new: true, runValidators: true, upsert: true},

/** remove function to remove User by id. */
exports.removeById = function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.send("User " + result.username + " was removed");
        } else {
            return res.send(err); // 500 error
        }
    });
};
