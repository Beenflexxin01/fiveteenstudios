const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    textDescription: {
      type: String,
    },

    tjitle: {
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Products = mongoose.model("products", productSchema);

module.exports = Products;
