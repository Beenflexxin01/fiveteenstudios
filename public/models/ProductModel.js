const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  textDescription: {
    type: String,
  },

  title: {
    type: String,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
  },

  shipPrice: {
    type: String,
  },

  color: {
    type: String,
  },

  size: {
    type: String,
  },

  paymentOption: {
    type: String,
  },

  imageCover: [String],

  image: {
    type: String,
  },
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
