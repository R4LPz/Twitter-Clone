const jwt = require('jsonwebtoken');


async function validateToken (req, res, next) {

	const token = req.headers.authorization;

	if (!token) 
		return res.status(401).send({ error: 'Access Denied - token not found' }); 

	const tokenSplited = token.split(' ');

	if (tokenSplited.length !== 2) 
		return res.status(401).send({ error: 'Access Denied - Invalid Token' }); 

	const [prefix, value] = tokenSplited;

	if (prefix !== 'Bearer') 
		return res.status(401).send({ error: 'Access Denied - Invalid Token' }); 

	jwt.verify(value, process.env.JWT_SECRET, (err, verifiedToken) => {
		if (err)
			return res.status(401).send({ error: 'Validation error' }); 

		req.user = verifiedToken.id;
		next();
	});
}

module.exports = validateToken;
