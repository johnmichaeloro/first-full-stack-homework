const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/examples';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
})

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected to ${connectionString}`);
})

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose error: ${err}`);
})
