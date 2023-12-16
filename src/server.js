// import { mongoose } from "mongoose";

// import { dotenv } from "dotenv";

// import { app } from "./src/App";
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const productRouter = require("./Routes/ProductRoutes");
const app = express();
// const app = require("./app");
// app.use(dotenv());

// app.use(App);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

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
    useUnifiedTopology: true,
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

// const Products = require("./models/ProductModel");

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Products.find();
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

app.use("/products", productRouter);

process.on("SIGTERM", function () {
  console.log("🤗 SIGTERM RECEIVED, Shutting down gracefully");
  server.close(function () {
    console.log("🔥 Process Terminated");
  });
});
