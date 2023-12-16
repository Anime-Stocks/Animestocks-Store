// DATABASE
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const uriPath = path.join(__dirname, "URI1.txt");
const MONGO_URI1 = fs.readFileSync(uriPath, "utf-8").trim();

// DB1 = admin
const db1 = mongoose.createConnection(MONGO_URI1);
db1.on("open", () => console.log("Connected to DB1"));
db1.on("error", (err) => console.log("Error in DB1 Connection: ", err));

module.exports = db1;