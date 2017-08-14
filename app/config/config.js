var config = {
  env: process.env.NODE_ENV || "development",
  logging: false,

  secrets: {
    mongoPW: process.env.MONGO_PW,
    githubToken: process.env.GITHUB_TOKEN
  }
};

// requires whichever file that our environment is at
var envConfig = require("./" + config.env);

// merge the object and export it to our app
module.exports = _.assign(config, envConfig || {});
