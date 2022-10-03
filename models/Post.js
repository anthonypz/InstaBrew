const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  flavorNotes: {
    type: String,
    required: false,
  },
  brewMethod: {
    type: String,
  },
  coffeeAmount: {
    type: Number,
    required: true,
  },
  grindSize: {
    type: Number,
    required: false,
  },
  waterAmount: {
    type: Number,
    required: false,
  },
  ratio: {
    type: String,
    required: false,
  },
  brewTime: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  method: {
    type: [String],
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  bookmarks: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Post', PostSchema)
