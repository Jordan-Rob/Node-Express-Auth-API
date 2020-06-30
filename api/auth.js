const express = require("express");
const router = express.Router();
const Tweep = require("../model/Tweeps");

router.post("/signup", (request, response) => {
  const tweep = new Tweep({
    userName: request.body.userName,
    email: request.body.email,
    password: request.body.password,
  });
});

module.exports = router;
