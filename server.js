const express = require("express");
const authUrls = require("./api/auth");

const app = express();

app.use("/api/auth/", authUrls);

app.listen(3000, () => {
  console.log("server is up & running");
});
