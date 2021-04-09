const mongoDb = require('../../db/mongodb');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

//create schema model here

const movieSchema = new mongoose.Schema({
  id: { type: String, unique: true },
	movieName: String,
	imageURL: String,
	genre: String,
	rating: Number
});

const Movie = mongoose.model('Movie', movieSchema);

//do I add save here?
let saveMovies = (movies) => {

  let arrayOfPromises = movies.map((movie) => {
		return Movie.findOneAndUpdate(
			{id: { type: String, unique: true }},
			{id: { type: String, unique: true },
			movieName: movie.movieName,
			imageURL: movie.imageURL,
			genre: movie.genre,
			rating: movie.rating},
			{upsert: true})
	}).exec();

	return Promise.all(arrayOfPromises);

}

let retrieveMovies = () => {
	mongoDb.collection.find({}).sort(-rating)limit(10)exec();
}

module.exports = {
	saveMovies: saveMovies,
	retrieveMovies: retrieveMovies
}
