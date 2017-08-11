//User schema
//This creates a User schema using Schema in mongoose

//First we import the modules needed
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//Then we declare a User Schema to identify the actual format of the data

var UserSchema = new Schema({
  id: {type: Number},
  firstname: {type: String},
  lastname: {type: String},
  username: {type: String},
  password: {type: String},
  location: {type: String},
  updated_at: {type: Date, required: true, default: Date.now}
});

//Now we set a model using the UserSchema that can be used by our app
var User = mongoose.model('User', UserSchema);
//Export the Schema as User that can be required by our app
module.exports = User;
