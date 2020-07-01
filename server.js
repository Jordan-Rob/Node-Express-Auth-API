const express = require("express");
const app = express();
const authUrls = require("./api/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("DB has been connected")
);

app.use(express.json());
app.use("/api/auth", authUrls);

app.listen(3000, () => {
  console.log("server is up & running");
});
