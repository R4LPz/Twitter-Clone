const bcrypt = require('bcryptjs')
const User = require("../models/user")

module.exports = {
    async create(req, res){
        const {email, password, name, username, description, profile_image} = req.body

        if(!email || !password || !username)
            return res.status(400).send({"Error": "Invalid data"})
        
        const userExists = await User.findOne({$or: [{username}, {email}]})

        if(userExists)
            return res.status(400).send({"Error": "User already exists"})
        
        const salt = await bcrypt.genSalt(10)
        const encriptedPassword = await bcrypt.hash(password,salt)

        const user = await User.create({
            email,
            password: encriptedPassword,
            name: name ? name : username,
            username,
            description,
            profile_image
        })
        return res.status(200).send({"User": user})
    },

    async searchByUsername(req,res){
        const { username } = req.params

        const user = await User.findOne({username})

        return user 
        ? res.status(200).send(user) 
        : res.status(404).send({"Error" : "User not found"})
    },

    async delete(req,res){
        const {username} = req.params

        const user = await User.findOne({username})

        if(!user)
            return res.status(400).send({"Error": "User not found"})
        
        await user.delete()
        
        return res.status(200).send({"Status": "Ok", "UserId": user._id})
    },

    async edit(req,res){
        const {name, description, profile_image} = req.body
        const {username} = req.params

        const user = await User.findOne({username})

        user.name = name ? name : user.name
        user.description = description ? description : user.description
        user.profile_image = profile_image ? profile_image : user.profile_image

        user.save()
        return res.status(200).send(user)
    }
}