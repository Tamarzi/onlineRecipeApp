const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	title: { type: String, required: true},
	ingredients: { type: String, required: true},
	instructions: { type: String, required: true},
	difficulty: { type: Number, required: true},
	timeToPrepare: { type: Number, required: true},
});

module.exports = mongoose.model( 'Recipe', recipeSchema);
