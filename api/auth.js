const express = require("express");
const router = express.Router();
const Tweep = require("../models/Tweeps");
const { signupChecks } = require("../authValidation");
const bcrypt = require('bcryptjs')

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

  const saltPassword = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(request.body.password, saltPassword)

  const tweep = new Tweep({
    userName: request.body.userName,
    email: request.body.email,
    password: hashedPassword,
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
