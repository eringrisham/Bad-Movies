const mongoDb = require('../../db/mongodb');
const mongoose = require('mongoose');

//create schema model here

const movieSchema = new mongoose.Schema({
  id: { type: String, unique: true },
	movieName: String,
	genre: String,
	rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

const save =

module.exports = Movie;