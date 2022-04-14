const mongoose = require('mongoose');


const User = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		max: 32,
		min: 8,
		select: false
	},
	name: {
		type: String
	},
	username:{
		type: String,
		required: true
	},
	description:{
		type: String,
		max: 400,
		default: ''
	},
	profile_image: {
		type: String,
		default: ''
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('User', User);