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
  location: {
    type: String,
    required: true
  }},
{
  timestamps: true
}); // Options: Add timestamps for createdAt and updatedAt

UserSchema.pre("save", function(next){
  // Caching this into a user variable
  var user = this;
  if (!user.isModified("password")) {
    return next();
  };
  // If password was modified, hashing it
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if (err) {
      return next(err);
    };
    bcrypt.hash(user.password, salt, function(err, hashedPassword){
      if (err) {
        return next(err);
      };
      user.password = hashedPassword;
      next();
    });
  });
});

UserSchema.statics = {
    get: function(query, callback) {
      this.findOne(query, callback);
    },
    getAll: function(query, callback) {
      this.find(query, callback);
    },
    update: function(id, updateData, callback) {
      this.findByIdAndUpdate(id, {$set: updateData}, callback);
    },
    remove: function(removeData, callback) {
      this.remove(removeData, callback);
    },
    create: function(data, callback) {
      var user = new this(data);
      user.save(callback);
    }
}

//Now we set a model using the UserSchema that can be used by our app
//Export the Schema as User that can be required by our app
module.exports = mongoose.model('User', UserSchema);
