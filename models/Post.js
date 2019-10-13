const mongoose = require('mongoose');
const {CommentSchema} =require('./Comment')
const PostSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  createAt: { type: Date, default: new Date() },
  commentIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})
const Post = mongoose.model('Post',PostSchema, 'Post');

module.exports = {
  PostSchema,Post
}
