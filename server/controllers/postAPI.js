require('../models/dbConnection');
const post = require('../models/postSchema');
const fs = require('fs');

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

  static async getPostByID(req, res) {
    const id = req.params.id;

    try {
      const postID = await post.findById(id);
      res.status(200).json(postID);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async updatePost(req, res) {
    const id = req.params.id;
    let new_image = '';

    if (req.file) {
      new_image = req.file.filename;

      try {
        fs.unlinkSync('./uploads/' + req.body.old_image);
      } catch (err) {
        console.log(err);
      }
    } else {
      new_image = req.body.old_image;
    }

    const newPost = req.body;
    newPost.image = new_image;

    try {
      await post.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: 'Post has been updated' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async deletePost(req, res) {
    const id = req.params.id;

    try {
      const del = await post.findByIdAndDelete(id);

      if (del.image != '') {
        try {
          fs.unlinkSync('./uploads/' + del.image);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: 'The post has been deleted' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async getPostList(req, res) {
    try {
      const allPosts = await post.find();
      res.status(200).json(allPosts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
