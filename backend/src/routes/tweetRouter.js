const { Router } = require('express');

const authentication = require('../middlewares/authentication');
const Tweet = require('../controllers/tweetController');


const router = Router();

router.use(authentication);
router.post('/', Tweet.create);
router.get('/', Tweet.searchAll);
router.get('/:id', Tweet.searchById);
router.delete('/:id', Tweet.delete);
router.patch('/:id', Tweet.edit);
router.patch('/:id/like', Tweet.like);

module.exports = router;