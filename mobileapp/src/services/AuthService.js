import {
  apiAuthSignupGenerateOTP,
  apiAuthSignupByMobileNumber,
} from "../api/apiutils/AuthApi";

const doSignupGenerateOTP = (requestData) => {
  return apiAuthSignupGenerateOTP(requestData);
};

const doSignupByMobileNumber = (requestData) => {
  return apiAuthSignupByMobileNumber(requestData);
};

const AuthService = {
  doSignupGenerateOTP,
  doSignupByMobileNumber,
};

export default AuthService;
