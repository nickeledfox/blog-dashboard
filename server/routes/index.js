const express = require('express');
const router = express.Router();
const controller = require('../controllers/post');
let upload = require('../modules/multer');

// routes
router.post('/', upload, controller.createPost);
router.patch('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);
router.get('/', controller.getPostList);
router.get('/:id', controller.getPostByID);

router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
