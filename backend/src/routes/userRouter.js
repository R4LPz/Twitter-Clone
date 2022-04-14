const { Router } = require('express');

const authentication = require('../middlewares/authentication');
const User = require('../controllers/userController');


const router = Router();

router.post('/', User.create);
router.use(authentication);
router.get('/:id', User.searchById);
router.delete('/:username', User.delete);
router.patch('/:username', User.edit);

module.exports = router;