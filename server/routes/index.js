const express = require('express');
const upload = require('../modules/multer');

const controller = require('../controllers/postAPI');
const router = express.Router();

// routes
router.post('/', upload, controller.createPost);
router.patch('/:id', upload, controller.updatePost);
router.delete('/:id', controller.deletePost);
router.get('/', controller.getPostList);
router.get('/:id', controller.getPostByID);

module.exports = router;
