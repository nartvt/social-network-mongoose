const mongoose = require('mongoose');
const { Post } = require('./models/Post')
const { Comment } = require('./models/Comment')

const dbPath = 'mongodb://temo:temo@localhost:27017/admin?retryWrites=true&w=majority';
mongoose.connect(dbPath, // local connection string
  // mongoose.connect('mongodb+srv://admin:admin@cluster0-djo82.mongodb.net/test?retryWrites=true&w=majority', // mongo cloud connection string
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(() => console.log('Connect to MongoDB successfully !')
).catch(err => console.log(err))

// const newPost = new Post({
//   author: 'Tran Van Tai',
//   content: 'Developer'
// })

// newPost.save()
//   .then(post => console.log(post))
// .catch(err=>console.log(err))

// const newComment = new Comment({
//   author: 'Tran Van Tai',
//   content: 'Developer',
//   createAt: Date.now()
// })
// const newComment_2 = new Comment({
//   author: 'Tran Van Tai',
//   content: 'Developer FullStack',
//   createAt: Date.now()
// })

// newComment.save()
//   .then(cmt => console.log(cmt))
//   .catch(err => console.log(err));
// newComment_2.save()
//   .then(cmt => console.log(cmt))
//   .catch(err => console.log(err));
  
// Post.findById('5da2e4dd704dbb2ee1527ba6')
//   .then(post => {
//     if (!post) return Promise.reject({ status: 404, message: 'Post not found' })

//     post.commentIds.push('5da2e4dd704dbb2ee1527ba7')
//     post.commentIds.push('5da2e4dd704dbb2ee1527ba8')
//     return post.save()
//   })
//   .then(post => console.log(post))
//   .catch(console.log);


Post.findById('5da2e4dd704dbb2ee1527ba6')
  .populate('commentIds','author content -_id')
  .then(post => {
    console.log(post)
  })
  .then(post => console.log(post))
  .catch(console.log);