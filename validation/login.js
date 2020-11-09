const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateLoginInput(data) {
  let errors = {};


// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// Email validation
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter an email address.";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

// Password validation
  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter your password.";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};