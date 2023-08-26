import { request } from "../base/BaseApi";
import { URL_AUTH_SIGNUP_MOBILE } from "../URLS";

export function apiAuthSignupMobile(requestData) {
  return request({
    url: URL_AUTH_SIGNUP_MOBILE,
    method: "GET",
  });
}
