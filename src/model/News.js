import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    require: true
  },
  likes: {
    type: Array,
    required: true,
  },
  comments: {
    type: Array,
    required: true,
  },
});

const News = mongoose.model('news' , newsSchema);

export default News;