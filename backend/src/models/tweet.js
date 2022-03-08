const mongoose = require('mongoose');

const Tweet = new mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	text: {
		type: String,
		required: true,
		max: 400
	},
	image: {
		type: String,
		default: ''
	},
	likes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tweet'
	}]
}, {
	timestamps: true
});

module.exports = mongoose.model('Tweet', Tweet);