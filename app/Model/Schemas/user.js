//User schema
//This creates a User schema using Schema in mongoose

//First we import the modules needed
var mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

//Then we declare a User Schema to identify the actual format of the data
var UserSchema = new Schema({
  id: {
    type: Number
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: [true, "No username?"],
    index: {
      unique: true,
      dropDups: true
    }
  },
  password: {
    type: String,
    required: [true, "Create a password, please!"]
  },
  salt: {
    type: String
  },
  location: {
    type: String,
    required: true
  }},
{
  timestamps: true
}); // Options: Add timestamps for createdAt and updatedAt

/**
* A pre save hook to hash the password using bcrypt
*/
UserSchema.pre("save", function(next){
  var user = this;
  if (user.password && user.isModified("password")) {
    user.salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    var hash = user.hashPassword(user.password);
  }
  user.password = hash;
  next();
});

/**
* A post update hook to hash the password using bcrypt
*/
// UserSchema.pre("update", function(next){
//   console.log(this);
//   var password = this._conditions.password;
//   var salt = this._conditions.salt;
//   var hash = bcrypt.hashSync(password, salt);
//   password = hash;
//   console.log(hash);
// });

/**
* Function - Hashing a password
*/
UserSchema.methods.hashPassword = function(password) {
  // if salt has been assigned, hash the password
  if (this.salt && password) {
    password = bcrypt.hashSync(password, this.salt)
    return password;
  } else {
    return password;
  }
};

/**
* Function - Authenticating user by matching passwords
*/
UserSchema.methods.authenticate = function(password) {
  return this.password === this.hashPassword(password);
};

//Now we set a model using the UserSchema that can be used by our app
//Export the Schema as User that can be required by our app
module.exports = mongoose.model('User', UserSchema);
