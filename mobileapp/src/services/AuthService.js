import { apiAuthSignupGenerateOTP } from "../api/apiutils/AuthApi";

const doSignupGenerateOTP = (requestData) => {
  return apiAuthSignupGenerateOTP(requestData);
};

const AuthService = {
  doSignupGenerateOTP,
};

export default AuthService;
