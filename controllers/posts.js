const cloudinary = require('../middleware/cloudinary')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const User = require('../models/User')

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id })
      res.render('profile.ejs', { posts: posts, user: req.user })
    } catch (err) {
      console.log(err)
    }
  },
  getRecipe: async (req, res) => {
    try {
      res.render('recipe.ejs')
    } catch (err) {
      console.log(err)
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: 'desc' }).lean()
      let users = []
      for (let i in posts) {
        let user = await User.findById(posts[i].user)
        users.push(user.userName)
      }
      res.render('feed.ejs', { posts: posts, user: req.user, userName: users })
    } catch (err) {
      console.log(err)
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      let username = await User.findById(post.user)
      const comments = await Comment.find({ post: req.params.id })
        .sort({ createdAt: 'desc' })
        .lean()
      res.render('post.ejs', {
        post: post,
        user: req.user,
        comments,
        userName: username.userName,
      })
    } catch (err) {
      console.log(err)
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path)

      await Post.create({
        name: req.body.name,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        flavorNotes: req.body.flavorNotes,
        suggestedCoffee: req.body.suggestedCoffee,
        brewMethod: req.body.brewMethod,
        coffeeAmount: req.body.coffeeAmount,
        grindSize: req.body.grindSize,
        waterAmount: req.body.waterAmount,
        method: req.body.method.split(/\s*(?:\n|$)\s*/gm),
        bookmarks: [],
        likes: 0,
        user: req.user.id,
      })
      console.log('Post has been added!')
      res.redirect('/profile')
    } catch (err) {
      console.log(err)
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      )
      console.log('Likes +1')
      res.redirect(`/post/${req.params.id}`)
    } catch (err) {
      console.log(err)
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id })
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId)
      // Delete post from db
      await Post.remove({ _id: req.params.id })
      console.log('Deleted Post')
      res.redirect('/profile')
    } catch (err) {
      res.redirect('/profile')
    }
  },
}
