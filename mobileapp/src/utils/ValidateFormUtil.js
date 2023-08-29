import { OTP_LENGTH, PASSWORD_MIN_LENGTH } from "../common/constants";

export function validatePassword(password, validator) {
  if (password.length < PASSWORD_MIN_LENGTH) {
    let newError = {
      password:
        "Password must be atleast " + PASSWORD_MIN_LENGTH + " characters long",
    };
    validator.errors = { ...validator.errors, ...newError };
    validator.isValid = validator.isValid && false;
  }
  return validator;
}

export function validateConfirmPassword(password, confirmPassword, validator) {
  if (confirmPassword.length < PASSWORD_MIN_LENGTH) {
    let newError = {
      confirmPassword:
        "Password must be atleast " + PASSWORD_MIN_LENGTH + " characters long",
    };
    validator.errors = { ...validator.errors, ...newError };
    validator.isValid = validator.isValid && false;
  } else if (password !== confirmPassword) {
    let newError = {
      confirmPassword: "Password and confirm password must be same",
    };
    validator.errors = { ...validator.errors, ...newError };
    validator.isValid = validator.isValid && false;
  }
  return validator;
}

export function validateOTP(otp, validator) {
  if (otp.length !== OTP_LENGTH) {
    let newError = {
      otp: "OTP must be " + OTP_LENGTH + " characters long",
    };
    validator.errors = { ...validator.errors, ...newError };
    validator.isValid = validator.isValid && false;
  }
  return validator;
}
