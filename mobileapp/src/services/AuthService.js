import { apiAuthSignupMobile } from "../api/apiutils/AuthApi";

const doSignupMobile = (requestData) => {
  return apiAuthSignupMobile(requestData);
};

const AuthService = {
  doSignupMobile,
};

export default AuthService;
