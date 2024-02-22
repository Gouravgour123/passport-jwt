const { default: mongoose } = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  active: Boolean,
  geolocation: {
    latitude: Number,
    longitude: Number
  }
});
const post =  mongoose.model('Post', PostSchema);


module.exports ={post}