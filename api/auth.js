const express = require("express");
const router = express.Router();
const Tweep = require("../models/Tweeps");
const { signupChecks } = require("../authValidation");

router.get("/", (request, response) => {
  response.send("testin");
});

router.post("/signup", async (request, response) => {
  const { error } = signupChecks(request.body);
  if (error) {
    return response.status(400).send(error.details[0].message);
  }

  const existingEmail = await Tweep.findOne({ email: request.body.email });
  if (existingEmail) {
    return response.status(400).send("Email already exists");
  }

  const tweep = new Tweep({
    userName: request.body.userName,
    email: request.body.email,
    password: request.body.password,
  });
  tweep
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
