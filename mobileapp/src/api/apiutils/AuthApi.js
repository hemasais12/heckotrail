import { httpPost, httpGet } from "../base/BaseApi";
import {
  URL_AUTH_SIGNUP_GENERATEOTP,
  URL_AUTH_SIGNUP_BYMOBILENUMBER,
} from "../URLS";

export function apiAuthSignupGenerateOTP(requestData) {
  return httpPost(URL_AUTH_SIGNUP_GENERATEOTP, requestData);
}

export function apiAuthSignupByMobileNumber(requestData) {
  console.log(URL_AUTH_SIGNUP_BYMOBILENUMBER);
  return httpPost(URL_AUTH_SIGNUP_BYMOBILENUMBER, requestData);
}
