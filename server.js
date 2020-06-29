const express = require("express");
const authUrls = require("./api/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("DB has been connected")
);

const app = express();

app.use("/api/auth/", authUrls);

app.listen(3000, () => {
  console.log("server is up & running");
});
