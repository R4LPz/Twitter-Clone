const jwt = require('jsonwebtoken')

async function validateToken(req,res, next){
    const token = req.headers.authorization

    if(!token)
        return res.status(400).send({error: "Acess Denied"})

    const parts = token.split(" ")

    if(!parts.lenght === 2)
        return res.status(400).send({error: "Invalid Token"})
    
    const [schema, hash] = parts

    if(schema !== "Bearer")
        return res.status(400).send({error: "Invalid Token"})
    
    jwt.verify(hash, process.env.JWT_SECRET, (err, decoded)=>{
        if(err)
            return res.status(401).send({error: "Invalid Token"})
        
        req.user = decoded._id
        next()
    })

}

module.exports = validateToken