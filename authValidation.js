const joi = require("@hapi/joi");

const signupChecks = (data) => {
  const validationSchema = joi.object({
    username: joi.string().min(4).required(),
    email: joi.string().min(4).required().email(),
    password: joi.string().min(4).required(),
  });
  return validationSchema.validate(data);
};

module.exports.signupChecks = signupChecks;
