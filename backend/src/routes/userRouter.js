const { Router } = require('express')
const userController = require('../controllers/userController')


const router = Router()

router.post('/', userController.create)
router.get('/:username', userController.searchByUsername)
router.delete('/:username', userController.delete)
router.patch('/:username', userController.edit)

module.exports = router
