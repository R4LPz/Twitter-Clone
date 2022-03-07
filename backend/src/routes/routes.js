const { Router } = require('express')
const userRouter = require('./userRouter')
const tweetRouter = require('./tweetRouter')
const sessionRouter = require('./sessionRouter')

const router = Router()

router.use('/user', userRouter)
router.use('/tweet', tweetRouter)
router.use('/session', sessionRouter)

module.exports = router