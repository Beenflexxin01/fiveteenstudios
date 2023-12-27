const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Products = require("../models/ProductListModel");
const Blog = require("../models/blogDesignModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB SUCCESSFULLY CONNECTED!!!"));

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/productListData.json`, `utf-8`)
);
const blog = JSON.parse(
  fs.readFileSync(`${__dirname}/blogListData.json`, `utf-8`)
);

const importData = async function () {
  try {
    await Products.create(products);
    await Blog.create(blog);
    console.log("Data successfully imported 😀😎!!!");
  } catch (err) {
    console.log(err);
  }
  process.exit(1);
};

const deleteData = async function () {
  try {
    await Products.deleteMany();
    await Blog.deleteMany();
    console.log("Data successfully deleted ❌🦀!!!");
  } catch (err) {
    console.log(err.name);
  }
  process.exit(1);
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
