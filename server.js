// import { mongoose } from "mongoose";

// import { dotenv } from "dotenv";

// import { app } from "./src/App";
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

// app.use(dotenv());
app.use(express.json());
app.use(cors());

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
    useCreateIndex: true,
    useFindAndModify: false,
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




process.on("SIGTERM", function () {
  console.log("🤗 SIGTERM RECEIVED, Shutting down gracefully");
  server.close(function () {
    console.log("🔥 Process Terminated");
  });
});
