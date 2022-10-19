const mongoose = require("mongoose");



const JokeSchema = new mongoose.Schema(
  {
  setup: String,
  punchline: String,
  },
  {
    versionKey:false
  }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;