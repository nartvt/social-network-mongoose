const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  createAt: { type: Date, default: new Date() },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }
})

const Comment = mongoose.model('Comment', CommentSchema,'Comment');

module.exports = {
  CommentSchema,Comment
}