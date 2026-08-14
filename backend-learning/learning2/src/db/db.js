const mongoose = require("mongoose");

require("dotenv").config();

const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbname: "halley",
  });

  console.log("Connected to DB");
}

module.exports = connectDB;
