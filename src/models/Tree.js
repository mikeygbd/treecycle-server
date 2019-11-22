const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
  treeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tree'
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  treeType: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const pointSchema = new mongoose.Schema ({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
})

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    default: ''
  },
  locations: [pointSchema]
});

mongoose.model('Tree', trackSchema);
