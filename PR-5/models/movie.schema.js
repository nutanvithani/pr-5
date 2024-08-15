const mongoose = require("mongoose");

let userschema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Date,
  category: String,
  actors: [{ name: String }],
  image: String,
  ratings: [
    {
      value: {
        type: Number,
        min: 0,
        max: 10,
      },
    },
  ],
  comments: [
    {
      text: String,
    },
  ],
  addedBy: String,
});

const users = mongoose.model("movie", userschema);

module.exports = users;
