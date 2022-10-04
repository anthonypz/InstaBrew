const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  name: {
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
  suggestedCoffee: {
    type: String,
  },
  brewMethod: {
    type: String,
  },
  coffeeAmount: {
    type: Number,
    required: true,
  },
  grindSize: {
    type: String,
    required: false,
  },
  waterAmount: {
    type: Number,
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
