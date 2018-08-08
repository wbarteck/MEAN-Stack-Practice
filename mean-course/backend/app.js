const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./Models/post');

const app = express();

// Connect to mongoDb
mongoose.connect('mongodb+srv://wbarteck:***REMOVED***@cluster0-44bnq.mongodb.net/node-angular?retryWrites=true')
.then (() => {
  console.log('Connected to database');
})
.catch(() => {
  console.error('Can\'t Connect to database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post("/api/posts", (req,res,next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(result => {
    res.status(201).json({
      message: 'post added',
      postId: result._id
    });
  });
});
app.patch("/api/posts/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  })
  Post.updateOne({_id: req.params.id }, post).then(result => {
    res.status(200).json({message: 'update successful'});
  });
});

app.get('/api/posts', (req,res,next) => {
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: 'Posts fetched succesffully',
        posts: documents
      });
    });

});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: 'Post deleted'});
  });

});

module.exports = app;
