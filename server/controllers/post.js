require('../models/dbConnection');
const post = require('../models/postSchema');

module.exports = class Post {
  static async createPost(req, res) {
    const newPost = req.body;
    const imageName = req.file.filename;
    newPost.image = imageName;
    try {
      await post.create(newPost);
      res.status(201).json({
        message: 'New Post has been created',
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updatePost(req, res) {
    res.send('Update Post');
  }

  static async deletePost(req, res) {
    res.send('Delete Post');
  }

  static async getPostList(req, res) {
    try {
      const allPosts = await post.find();
      res.status(200).json(allPosts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async getPostByID(req, res) {
    res.send('Get post by ID');
  }
};
