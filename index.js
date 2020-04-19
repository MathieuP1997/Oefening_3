const express = require('express');
const app = express();

const port = 5000;

const path = require('path');

app.set('view engine','ejs');
app.use(express.static('public'));
app.set('views',path.resolve(__dirname, 'views'));

const blogposts = require('./data/blogposts.json');

app.get('/', function(req, res){
  res.render('home',{
    postsArray:blogposts.posts
  });
});

app.get('/blog/:id',function(req, res)
{
  res.render('detail', {
    post:blogposts.posts[req.params.id],
    lastPostId:blogposts.posts.length-1,
    postId: req.params.id
  })
});

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/contact', function(req, res){
  res.render('contact');
});
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
