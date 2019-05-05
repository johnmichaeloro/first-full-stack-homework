const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  author: {type: String, required: true, unique: true},
  title: {type: String, required: true},
  link: {type: String},
  yellowSentence: {type: String},
  greenSentence: {type: String},
  blueSentence: {type: String},
});

const examples = mongoose.model('Examples', exampleSchema);

module.exports = examples;
