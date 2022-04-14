const bcrypt = require('bcryptjs');
const User = require('../models/user');


module.exports = {

	async create (req, res) {
		const { email, password, username } = req.body;

		if (!email || !password || !username)
			return res.status(400).send({Error: 'Invalid data'});

		const userExists = await User.findOne({$or: [{username}, {email}]});

		if (userExists)
			return res.status(400).send({Error: 'User already exists'});

		const salt = await bcrypt.genSalt(10);
		const encriptedPassword = await bcrypt.hash(password, salt);
		const user = await User.create({
			email,
			password: encriptedPassword,
			username
		});
		return res.status(200).send({User: user});
	},

	async searchById (req, res) {
		const { id } = req.params;
		const user = await User.findOne({id});
		return user
			? res.status(200).send(user)
			: res.status(404).send({Error: 'User not found'});
	},

	async delete (req, res) {
		const { username } = req.params;
		const userId = req.user;
		const user = await User.findOne({username});

		if (!user)
			return res.status(400).send({Error: 'User not found'});

		if (userId != user.id) 
			return res.status(403).send({Error: 'Forbiden operation'});

		await user.delete();
		return res.status(200).send({UserId : user.id});
	},

	async edit (req, res) {
		const { name, description, profile_image } = req.body;
		const { username } = req.params;
		const userId = req.user;
		const user = await User.findOne({username});

		if (!user) 
			return res.status(400).send({Error: 'User not found'});
		
		if (userId != user.id) 
			return res.status(403).send({Error: 'Forbiden operation'});

		user.name = name ? name : user.name;
		user.description = description ? description : user.description;
		user.profile_image = profile_image ? profile_image : user.profile_image;
		user.save();
		return res.status(200).send(user);
	},
};
