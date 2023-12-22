const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Products = require("./src/models/ProductModel");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.static(path.join(__dirname, "main")));

process.on("UncaughtException", (err) => {
  console.log(err.message);
  console.log("UNCAUGHT EXCEPTION... SHUTTING DOWN NOW......");
});

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB CONNECTION SUCCESSFUL 😉😎!"));

const port = process.env.PORT || 8000;

const server = app.listen(port, () =>
  console.log(`App is running on port ${port}`)
);

process.on("unhandledRejection", (err) => {
  console.log(err.name);
  console.log("UNHANDLED REJECTION! KINDLY CONNECT TO THE INTERNET😑");
  server.close(() => process.exit(1));
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// app.use("/api/products", productRouter);

process.on("SIGTERM", function () {
  console.log("🤗 SIGTERM RECEIVED, Shutting down gracefully");
  server.close(function () {
    console.log("🔥 Process Terminated");
  });
});
