const { Router } = require('express')
const sessionController = require('../controllers/sessionController')


const router = Router()

router.post('/', sessionController.create)

module.exports = router