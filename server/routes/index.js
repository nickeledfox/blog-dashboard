const express = require('express');
const router = express.Router();
const controller = require('../controllers/post');

// routes
router.post('/api/post/', controller.newPost);
router.patch('/api/update/', controller.updatePost);
router.delete('/api/delete/', controller.deletePost);
router.get('/api/posts/', controller.getPostList);
router.get('/api/post/', controller.getPostByID);

router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
