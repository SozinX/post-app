const router = require('express').Router();

const postController = require('../controllers/postController');

router.get('/', postController.list);
router.post('/add', postController.save);
router.get('/update/:id', postController.edit);
router.post('/update/:id', postController.update);
router.get('/delete/:id', postController.delete);

module.exports = router;
