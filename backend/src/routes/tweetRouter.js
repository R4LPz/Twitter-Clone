const { Router } = require('express')
const tweetController = require('../controllers/tweetController')
const authentication = require('../middlewares/authentication')


const router = Router()

router.use(authentication)
router.post('/', tweetController.create)
router.get('/:id', tweetController.searchById)
router.delete('/:id', tweetController.delete)
router.patch('/:id', tweetController.edit)
router.patch('/:id/like', tweetController.like)

module.exports = router