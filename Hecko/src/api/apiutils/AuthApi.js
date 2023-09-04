import { httpPost, httpGet } from "../base/BaseApi";
import {
  URL_AUTH_SIGNIN_GENERATEOTP,
  URL_AUTH_SIGNIN_BYEMAIL,
  URL_AUTH_SIGNIN_BYMOBILE,
  URL_AUTH_SIGNUP_GENERATEOTP,
  URL_AUTH_SIGNUP_BYEMAIL,
  URL_AUTH_SIGNUP_BYMOBILENUMBER,
} from "../urls/AuthURLs";

export function apiAuthSignInGenerateOTP(requestData) {
  return httpPost(URL_AUTH_SIGNIN_GENERATEOTP, requestData);
}

export function apiAuthSigninByEmail(requestData) {
  return httpPost(URL_AUTH_SIGNIN_BYEMAIL, requestData);
}

export function apiAuthSigninByMobile(requestData) {
  return httpPost(URL_AUTH_SIGNIN_BYMOBILE, requestData);
}

export function apiAuthSignupGenerateOTP(requestData) {
  return httpPost(URL_AUTH_SIGNUP_GENERATEOTP, requestData);
}

export function apiAuthSignupByEmail(requestData) {
  return httpPost(URL_AUTH_SIGNUP_BYEMAIL, requestData);
}

export function apiAuthSignupByMobileNumber(requestData) {
  return httpPost(URL_AUTH_SIGNUP_BYMOBILENUMBER, requestData);
}
