import { API_URL } from "../../common/constants";

export const ROLE_API_URL = "/role";

export const URL_ROLE_ADD_USERROLE =
  API_URL + ROLE_API_URL + "/signin/verifyemailormobilenumber";

export const URL_ROLE_ADD_USERROLES =
  API_URL + ROLE_API_URL + "/signin/byemail";

export const URL_ROLE_UPDATE_DEFAULT_USERROLE =
  API_URL + ROLE_API_URL + "/signin/byemail";
