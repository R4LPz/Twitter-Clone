const { Router } = require('express');

const Session = require('../controllers/sessionController');


const router = Router();

router.post('/', Session.create);

module.exports = router;