const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  publishedDate: String,
  description: String,
  author: String,
});

const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;
