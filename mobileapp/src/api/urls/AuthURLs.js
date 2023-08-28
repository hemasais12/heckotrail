import { API_URL } from "../../common/constants";

export const AUTH_API_URL = "/auth";

export const URL_AUTH_SIGNIN_GENERATEOTP =
  API_URL + AUTH_API_URL + "/signin/verifyemailormobilenumber";

export const URL_AUTH_SIGNIN_BYEMAIL =
  API_URL + AUTH_API_URL + "/signin/byemail";

export const URL_AUTH_SIGNIN_BYMOBILE =
  API_URL + AUTH_API_URL + "/signin/bymobileNumber";

export const URL_AUTH_SIGNUP_GENERATEOTP =
  API_URL + AUTH_API_URL + "/signup/registeremailormobileNumber";

export const URL_AUTH_SIGNUP_BYEMAIL =
  API_URL + AUTH_API_URL + "/signup/byemail";

export const URL_AUTH_SIGNUP_BYMOBILENUMBER =
  API_URL + AUTH_API_URL + "/signup/bymobileNumber";
