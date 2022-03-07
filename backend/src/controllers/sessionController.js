const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = {
    async create(req, res){
        const  { email, password } = req.body

        if(!email || !password)
            return res.status(400).send({error: "Invalid Data"})
        
        const user = await User.findOne({email}, 'password')

        if(!user)
            return res.status(400).send({error: "Email or Password is wrong"})

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword)
            return res.status(400).send({error: "Email or Password is wrong"})
        
        const token = jwt.sign({_id: user.id}, process.env.JWT_SECRET, { expiresIn: 86400})

        return res.status(200).send({user: user._id, token: token})
    }
}