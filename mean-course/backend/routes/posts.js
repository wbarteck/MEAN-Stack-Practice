const express = require('express');
const extractFile = require('../middleware/multer-info');

const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const PostController = require('../controllers/posts');

router.post("", checkAuth, extractFile, PostController.createPost);

router.patch("/:id", checkAuth, extractFile, PostController.updatePost);

router.get('', PostController.getPosts);

router.get('/:id', PostController.getPostById);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
