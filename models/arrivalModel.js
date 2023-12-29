const mongoose = require("mongoose");

const arrivalSchema = new mongoose.Schema({
  title: String,
  default: String,
  price: String,
  oldPrice: String,
  image: String,
  hiddenImage: String,
  imageCover: [String],
  description: String,
  size: String,
  sale: String,
  paymentOption: String,
  shipPrice: String,
  quantity: String,
  qtnNum: Number,
  qtnBtn: String,
  qtnBtnAdd: String,
  color: String,
  cart: String,
  buy: String,
  btnPay: String,
  btnPal: String,
  soldOut: String,
});

const Arrivals = mongoose.model("arrivals", arrivalSchema);

module.exports = Arrivals;
