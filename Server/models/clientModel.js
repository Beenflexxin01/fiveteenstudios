const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Clients = mongoose.model("clients", clientSchema);

module.exports = Clients;
