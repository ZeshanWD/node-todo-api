const env = process.env.NODE_ENV || 'development';

if (env == 'development' || env == 'test') {
  const config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

// if (env == 'development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://zeshan:zeshan2018@ds157112.mlab.com:57112/mongo-todo-api';
// } else if (env == 'test') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://zeshan:zeshan2018@ds249503.mlab.com:49503/mongo-todo-api-test';
// }