import {
  apiAuthSignInGenerateOTP,
  apiAuthSigninByEmail,
  apiAuthSigninByMobile,
  apiAuthSignupGenerateOTP,
  apiAuthSignupByEmail,
  apiAuthSignupByMobileNumber,
} from "../api/apiutils/AuthApi";

const doSigninGenerateOTP = (requestData) => {
  return apiAuthSignInGenerateOTP(requestData);
};

const doSigninByEmail = (requestData) => {
  return apiAuthSigninByEmail(requestData);
};

const doSigninByMobile = (requestData) => {
  return apiAuthSigninByMobile(requestData);
};

const doSignupGenerateOTP = (requestData) => {
  return apiAuthSignupGenerateOTP(requestData);
};

const doSignupByEmail = (requestData) => {
  return apiAuthSignupByEmail(requestData);
};

const doSignupByMobileNumber = (requestData) => {
  return apiAuthSignupByMobileNumber(requestData);
};

const AuthService = {
  doSigninGenerateOTP,
  doSigninByEmail,
  doSigninByMobile,
  doSignupGenerateOTP,
  doSignupByEmail,
  doSignupByMobileNumber,
};

export default AuthService;
