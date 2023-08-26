import { request } from "../base/BaseApi";
import { URL_AUTH_SIGNUP_GENERATEOTP } from "../URLS";

export function apiAuthSignupGenerateOTP(requestData) {
  console.log(URL_AUTH_SIGNUP_GENERATEOTP);
  return request({
    url: URL_AUTH_SIGNUP_GENERATEOTP,
    method: "POST",
    body: JSON.stringify(requestData),
  });
}
