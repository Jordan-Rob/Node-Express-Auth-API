const express = require("express");

const router = express.Router();

router.get("/", (response, request) => {
  response.send("testin");
});

module.exports = router;
