const Products = require("../models/ProductModel");
const factory = require("./HandlerFactory");

exports.getAllProducts = factory.getAllProducts(Products);
