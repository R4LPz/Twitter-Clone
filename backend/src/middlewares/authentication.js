const jwt = require('jsonwebtoken');

async function validateToken(req, res, next) {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).send({ error: 'Acess Denied' }); 
	}

	const tokenSplited = token.split(' ');

	if (tokenSplited.length !== 2) { 
		return res.status(401).send({ error: 'Invalid Token' }); 
	}

	const [schema, hash] = tokenSplited;

	if (schema !== 'Bearer') { return res.status(401).send({ error: 'Invalid Token' }); }

	jwt.verify(hash, process.env.JWT_SECRET, (err, verifiedToken) => {
		if (err) {
			return res.status(401).send({ error: 'Validation error' }); 
		}
		req.user = verifiedToken.id;
		next();
	});
}

module.exports = validateToken;
