const env = process.env.NODE_ENV;
console.log('env *******', env);
console.log('port *******', process.env.PORT);
if (env == 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://zeshan:zeshan2018@ds157112.mlab.com:57112/mongo-todo-api';
} else if (env == 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://zeshan:zeshan2018@ds249503.mlab.com:49503/mongo-todo-api-test';
}