module.exports = class Post {
  static async newPost(req, res) {
    res.send('New Post');
  }
  static async updatePost(req, res) {
    res.send('Update Post');
  }
  static async deletePost(req, res) {
    res.send('Delete Post');
  }
  static async getPostList(req, res) {
    res.send('Post list');
  }
  static async getPostByID(req, res) {
    res.send('Get post by ID');
  }
};
