const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Products = require("../src/models/ProductModel");

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
  fs.readFileSync(`${__dirname}/fiveteendata.json`, `utf-8`)
);

const importData = async function () {
  try {
    await Products.create(products);
    console.log("Data successfully imported 😀😎!!!");
  } catch (err) {
    console.log(err);
  }
  process.exit(1);
};

const deleteData = async function () {
  try {
    await Products.create(products);
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