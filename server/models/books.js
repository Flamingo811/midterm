let mongoose = require('mongoose');

// create a model class
let bookSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  author: String,
  genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', bookSchema);
