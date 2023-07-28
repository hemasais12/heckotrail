import {
  apiLogin,
  apiLoginWithPassword,
  apiLoginWithOtp,
  apiSignup,
  apiSignupWithPassword,
  apiSignupWithOtp,
} from "../utils/AppUtils";

const login = (loginRequest) => {
  return apiLogin(loginRequest);
};

const loginWithPassword = (loginRequest) => {
  return apiLoginWithPassword(loginRequest);
};

const loginWithOtp = (loginRequest) => {
  return apiLoginWithOtp(loginRequest);
};

const signup = (signupRequest) => {
    return apiSignup(signupRequest);
  };
  
  const signupWithPassword = (signupRequest) => {
    return apiSignupWithPassword(signupRequest);
  };
  
  const signupWithOtp = (signupRequest) => {
    return apiSignupWithOtp(signupRequest);
  };

const AuthService = {
  login,
  loginWithPassword,
  loginWithOtp,
  signup,
  signupWithPassword,
  signupWithOtp,
};

export default AuthService;
