const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  image: String,
});

postSchema.index({ '$**': 'text' });

module.exports = mongoose.model('post', postSchema);
